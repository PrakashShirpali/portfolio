import { Minus, Plus } from "lucide-react";

type PageButtonProps = {
  number: number;
  text?: string;
};
const ShowCard = ({ number, text }: PageButtonProps) => {
  return (
    <div className="border rounded-sm p-6">
      <span className="text-mtheme text-5xl font-black flex">{number}<Plus strokeWidth={4} /></span>
      <span className="uppercase font-semibold text-pforeground flex relative w-36"><Minus strokeWidth={1} size={52} className="opacity-80 relative bottom-3" />{text}</span>
    </div>
  )
}

export default ShowCard; 
