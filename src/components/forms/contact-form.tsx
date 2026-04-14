import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { contactSchema } from "@/schemas/contact-schema"
import type { ContactSchemaType } from "@/schemas/contact-schema"

import { useSendMessageMutation } from "@/store/api/contactApi"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion";

import { toast } from "sonner"
import PageButton from "../PageButton"
import { Send } from "lucide-react"

export function ContactForm() {

  const [sendMessage, { isLoading }] = useSendMessageMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema)
  })

  async function onSubmit(data: ContactSchemaType) {

    if (data.website) {
      return
    }

    const toastId = toast.loading("Sending message...")

    try {

      await sendMessage(data).unwrap()

      toast.success("Message sent!", { id: toastId })

      reset()

    } catch (error) {

      toast.error("Failed to send message", { id: toastId })

    }

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-8xl max-md:pb-22"
    >
      <input
        type="text"
        {...register("website")}
        className="hidden"
      />

      <div className="flex gap-x-6">
        <Input
          placeholder="Your Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}

        <Input
          placeholder="Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <Input
        placeholder="Your Subject"
        {...register("subject")}
      />
      {errors.subject && (
        <p className="text-red-500 text-sm mt-1">
          {errors.subject.message}
        </p>
      )}

      <Textarea
        placeholder="Your Message"
        className="min-h-45"
        {...register("message")}
      />
      {errors.message && (
        <p className="text-red-500 text-sm mt-1">
          {errors.message.message}
        </p>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        initial="rest"
        whileHover="hover"
        className="relative overflow-hidden border border-mtheme w-fit h-fit rounded-full flex items-center cursor-pointer group"
      >
        <PageButton Icon={Send} text={isLoading ? "Sending..." : "Send Message"} />
      </motion.button>

    </form>
  )
}