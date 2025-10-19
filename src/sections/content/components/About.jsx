
export default function AboutUs(){
  return(
    <div className="w-full grid grid-cols-2 pt-6 gap-2.5">
      <div className="flex flex-col gap-5">
        <div>

        <h1 className="text-[3rem] font-bold">
          About Intuivo
        </h1>
        <h3>
          DESIGN, MARKETING, INTERACTIVE, AND SYSTEMS ARCHITECTURE DEVELOPMENT INCUBATOR FIRM.
        </h3>
        </div>
        <div className="grid grid-cols-2 gap-1">   
        <p>Intuivo is a unique team of geek software architects, dreams designers, choice developers, and marketing writers. For over a decade, we've helped ideas for businesses come into fruition, to produce intuitive system solutions through experience,  experimentation, graphic design, web design, and storytelling.
        </p>
        <img src="https://intuivo.com/2016/img/Responsive-showcase-presentation.jpg" alt="img" />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-1 ">
        <div className="div-flex-style">
            <img src="https://intuivo.com/2016/img/feature1.jpg" alt="" />
          <h3>
            Responsive Design
          </h3>
          <p>
            Products, websites, and mobile development to fit your needs, for Android, and IOS, and Wearable.
          </p>
        </div>
        <div className="div-flex-style">
          <img src="https://intuivo.com/2016/img/feature2.jpg" alt="img" className="flex dire"/>
          <h3>
            Latest Technology
          </h3>

          <p>
            We love to study and we are always with the lastest technologies and trends.
          </p>
        </div>
        <div className="div-flex-style">
          <img src="https://intuivo.com/2016/img/feature3.jpg" alt="img" />
            <h3>
              Software that is intuitive
            </h3>
            <p>
              The User Experience for us is like child going into a piece of game which you reuse the processes you already natively and intuitively know already.
            </p>
        </div>
        <div className="div-flex-style">
          <img src="https://intuivo.com/2016/img/feature4.jpg" alt="img" />
          <h3>
            One Page Simplicity
          </h3>
          <p>
            Single page applications, or webpage, and the simplicity of using it and loading it optimized for your business.
          </p>
        </div>
      </div>
    </div>
  )
}