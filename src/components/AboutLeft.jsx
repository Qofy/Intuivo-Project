

export default function AboutLeft({src, h3, p,altName}){
  return(
     <div className="div-flex-style">
            <img src={src} alt={altName}/>
          <h3>
            {h3}
          </h3>
          <p className="text-center">
           {p}
          </p>
        </div>
  )
}