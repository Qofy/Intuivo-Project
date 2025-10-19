import { Twitter, Facebook } from "lucide-react"

export default function Footer(){
  return(
    <div className="bg-[#242223] py-32 flex flex-col gap-10">
      <div className="flex gap-20 px-25 justify-center">
        <div className="flex flex-col gap-5">
          <h1>
            Oregon
          </h1>
          <div>
          <p>1915 Northwest Amberglen Parkway</p>
          <p>Beaverton, Oregon 97006</p>
          <p>Tel: (541) 250 0570</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>
            Chihuahua
          </h1>
          <div>
          <p>Calle Virginia 2039</p>
          <p>Fracc. Las Aguilas CP 31214</p>
          <p>Tel: (52) 1 614 153 1041</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <a href="#" className="roundered">
        <Twitter size={60} fill="#ffff" color=""/>
        </a>
        <a href="#" className="roundered">
        <Facebook size={60} fill="#ffff" color=""/>
        </a>
      </div>

    </div>
  )
}