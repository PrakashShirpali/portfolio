import { supabase } from "@/lib/supabase";
import type { ContactSchemaType } from "@/schemas/contact-schema";

export async function sendMessage(data: ContactSchemaType) {
  const { website, ...safeData } = data;

  const { error } = await supabase.from("contact_messages").insert(safeData);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}
