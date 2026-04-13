import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { contactSchema } from "@/schemas/contact-schema"
import type { ContactSchemaType } from "@/schemas/contact-schema"

import { useSendMessageMutation } from "@/store/api/contactApi"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { toast } from "sonner"

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
      className="space-y-6 max-w-xl"
    >
      <input
        type="text"
        {...register("website")}
        className="hidden"
      />

      <div>
        <Input
          placeholder="Your Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
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

      <div>
        <Input
          placeholder="Your Subject"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          className="min-h-[180px]"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

    </form>
  )
}