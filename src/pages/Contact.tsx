import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MailOpen, Map, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/forms/contact-form";

const Contact = () => {


  const contactInfos = [
    {
      Cicon: Map,
      Ctitle: "Address",
      Cbody: "Airport Runway Viewpoint, Dabolim, Mormugao,Goa, India."
    },
    {
      Cicon: MailOpen,
      Ctitle: "Mail me",
      Cbody: "prakashlalbahadur@gmail.com"
    },

    {
      Cicon: Phone,
      Ctitle: "Call me",
      Cbody: "+91 9172954506"
    }

  ];

  const socialMedia = [
    {
      Sicon: FaGithub,
      Slink: "https://github.com/PrakashShirpali"
    },
    {
      Sicon: FaLinkedin,
      Slink: "https://www.linkedin.com/in/prakashshirpali"
    },
  ];


  return (
    <div className="flex-1">

      <PageHeader first="get in" second="touch" third="contact" />

      <div className="flex max-md:flex-col px-4 justify-evenly max-md:gap-y-12 p-2">

        <div className="flex flex-col gap-y-6 max-w-lg">
          <h1 className="text-2xl max-md:text-center font-bold uppercase text-pforeground">
            Don't be shy !
          </h1>
          <span className="text-pforeground">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</span>

          {contactInfos.map((info, index) => (
            <div key={index} className="flex gap-x-2">
              <div>{info.Cicon && <info.Cicon fill=" var(--mtheme)" color="var(--pbackground)" size={44} />}</div>
              <div className="flex flex-col">
                <span className="text-pforeground opacity-80 uppercase">{info.Ctitle}</span>
                <span className="text-pforeground font-semibold">{info.Cbody}</span>
              </div>
            </div>
          ))}

          <ul className="flex gap-x-4 max-md:mx-auto">
            {socialMedia.map((media) => (
              <li key={media.Slink}>

                <a href={media.Slink} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="rounded-full p-2 size-10 border-none bg-icon-background text-icon-foreground md:hover:bg-mtheme md:hover:text-white transition-colors duration-15"
                  >
                    {media.Sicon && <media.Sicon className="size-5" />}
                  </Button>

                </a>
              </li>
            ))}
          </ul>

        </div>

        <ContactForm />
      </div>

    </div>
  )
}

export default Contact;