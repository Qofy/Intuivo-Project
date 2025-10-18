import Logo from "./Logo";
import Navlinks from "./Navlinks";

export default function Navbar(){
  return <div className="flex justify-between w-full h-[4rem] bg-[#151515] items-center border-b-1 border-[#a0bd35] px-[1.5rem]">
    <Logo/>
    <Navlinks/>
  </div>
}