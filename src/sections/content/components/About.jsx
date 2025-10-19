import AboutLeft from "../../../components/AboutLeft";

export default function AboutUs(){
  return(
    <div className="div-grid">
      <div className="flex flex-col gap-5">
        <div>
        <h1 className="h1-style">
          About Intuivo
        </h1>
        <h3>
          DESIGN, MARKETING, INTERACTIVE, AND SYSTEMS ARCHITECTURE DEVELOPMENT INCUBATOR FIRM.
        </h3>
        </div>
        <div className="grid grid-cols-2 gap-5">   
        <p className="text-base/7">Intuivo is a unique team of geek software architects, dreams designers, choice developers, and marketing writers. For over a decade, we've helped ideas for businesses come into fruition, to produce intuitive system solutions through experience,  experimentation, graphic design, web design, and storytelling.
        </p>
        <img src="https://intuivo.com/2016/img/Responsive-showcase-presentation.jpg" alt="img" />

      <p>“Intuivo marketing interactive, design, produces, architects and develops intuitive computer system software solutions for web, micro devices, desktop and mobile.”</p>
      <p>
        “We plan, design, and develop intuitive software solutions that promote ease of use by imitating human behavior, tailored for your business needs.”
      </p>
      <p className="text-base/6">
        “Intuivo ! Igniting Big Global Creative Ideas.”<br/>
        "Intuivo! Igniting Big, Bold, and Transformative Global Creative Ideas."<br/>
        "Intuivo! Igniting Big Global Creative Ideas that Shape the Future."<br/>
      </p>
      <p>
        “Intuivo ! Software Architecture.”<br/>
        “Intuivo ! Cat outside the softbox.” <br/>
        "Intuivo ! Ideas that break the mold." <br/>
        "Intuivo ! Thinking outside the algorithm."
      </p>
      <p>
        
      </p>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-1 ">
       <AboutLeft src="https://intuivo.com/2016/img/feature1.jpg" h3="Responsive Design" p="Products, websites, and mobile development to fit your needs, for Android, and IOS, and Wearable." altName="img"/>

       <AboutLeft src="https://intuivo.com/2016/img/feature2.jpg" h3="Latest Technology" p="We love to study and we are always with the lastest technologies and trends." altName="img"/>

       <AboutLeft src="https://intuivo.com/2016/img/feature3.jpg" altName="img" h3=" Software that is intuitive" p="The User Experience for us is like child going into a piece of game which you reuse the processes you already natively and intuitively know already."/>

       <AboutLeft src="https://intuivo.com/2016/img/feature4.jpg" altName="img" h3="One Page Simplicity" p="Single page applications, or webpage, and the simplicity of using it and loading it optimized for your business."/>
      </div>
    </div>
  )
}