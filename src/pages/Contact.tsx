import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MailOpen, Map, Phone } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

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
      Slink: "github"
    },
    {
      Sicon: FaLinkedin,
      Slink: "linkedin"
    },
    {
      Sicon: FaFacebookF,
      Slink: "facebook"
    },
    {
      Sicon: AiFillInstagram,
      Slink: "instagram"
    },
    {
      Sicon: IoLogoWhatsapp,
      Slink: "whatsapp"
    },

  ];


  return (
    <div className="flex-1">

      <PageHeader first="get in" second="touch" third="contact" />

      <div className="flex max-md:flex-col px-4 justify-evenly">

        <div className="flex flex-col gap-y-6">
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
            {socialMedia.map((media, index) => (
              <li key={index}>

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

        {/* <div>
          <div>
            <Input></Input>
            <Input></Input>
          </div>
          <Input></Input>
          <Textarea></Textarea>
          <PageButton Icon={Send} text="send message" />
        </div> */}
      </div>

    </div>
  )
}

export default Contact;