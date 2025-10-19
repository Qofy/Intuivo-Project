import { Link } from "react-scroll";

const links = ["about us", "portfolio", "contact"];

export default function Navlinks() {
  return (
    <ul className="flex gap-10 text-[15px] font-bold tracking-wider">
      {links.map(link => (
        <li className="hover:animate-bounce" key={link}>
          <Link
            to={link}
            className="cursor-pointer"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}