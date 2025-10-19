import { NavLink } from "react-router-dom";
const links = ["about us", "portfolio", "contact"];
export default function Navlinks() {
  return (
    <ul className="flex gap-10  text-[15px] font-bold tracking-wider">
      {links.map(link => (
        <li className="hover:animate-bounce" key={link}>
          <NavLink to={`/${link}`}>{link}</NavLink>
        </li>
      ))}
    </ul>
  );
}