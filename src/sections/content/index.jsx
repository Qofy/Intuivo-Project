import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";


export default function Content(){
  return(
    <div className="w-full h-full flex flex-col gap-10">
    <AboutUs/>
    <Portfolio/>
    <Contact/>
    </div>
  )
}