import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "@/lib/supabase";
import type { ContactSchemaType } from "@/schemas/contact-schema";

export const contactApi = createApi({
  reducerPath: "contactApi",

  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    sendMessage: builder.mutation<boolean, ContactSchemaType>({
      async queryFn(data) {
        const { error } = await supabase.from("contact_messages").insert(data);

        if (error) {
          return { error };
        }

        return { data: true };
      },
    }),
  }),
});

export const { useSendMessageMutation } = contactApi;
