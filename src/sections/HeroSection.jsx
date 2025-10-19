import AnimationContainerLeft from "../components/Animate-Container-left"
import AnimateContainerRight from "../components/Animate-Container-Right"

export default function HeroSection(){
  return (
    <div className="  h-[90dvh] flex overflow-hidden border-b-1 ">
     <AnimationContainerLeft/>
      <div className="pt-16 w-1/3">
      <div className="flex flex-col justify-center text-center gap-5 my-30 mx-auto">
        <h1 className="text-[4rem] tracking-widest font-medium">
          Intuivo !
        </h1>
        <a href="#">
          (/inˈto͞o-i-vō/)
        </a>
        <h3 className="text-3xl font-bold tracking-wide">
          Igniting Creative Ideas.
        </h3>
        <audio controls={true} className="mt-12 hover:scale-[1.05] cursor-pointer w-3/4 mx-auto block transition-all ease-linear duration-[0.5s] shadow-[#a0bd35]/50 shadow-lg">
        <source src="https://intuivo.com/2016/sounds/intuivo.mp3" type="audio/mpeg"/>
        </audio>
      </div>
      </div>
      <AnimateContainerRight/>
        </div>
  )
}