import { AiOutlineHome } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { GiCalendar } from "react-icons/gi";

export const iconsBottomBar = [
  { id: 0, description: "Inicio", url: "/", icon: AiOutlineHome },
  { id: 1, description: "Contacto", url: "/contact", icon: RiComputerLine },
  { id: 2, description: "Materias", url: "/subjects", icon: VscBook },
  { id: 3, description: "Cursos", url: "/courses", icon: AiOutlineFire },
  { id: 4, description: "Calendar", url: "/calendar", icon: GiCalendar },
];
