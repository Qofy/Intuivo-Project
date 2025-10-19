import PortfolioContent from "../../../components/AboutLeft"

export default function Portfolio(){
  return(
  <div className="pt-5">
    <div className="flex flex-col items-center">
      <h1 className="h1-style">Portfolio</h1>
      <h3 className="uppercase">We love to produce software that covers a need.</h3>
    </div>
    <div className="div-grid">
      <PortfolioContent src="https://intuivo.com/2016/img/tb2.jpg" altName="portfolio" h3="Nirvana Indian Restaurant" p="Custom Website, seo, logo, content management, social media..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb3.jpg" altName="portfolio" h3="Evergreen" p="Custom Point of Sale, Logo, Marketing, Reporting, Printing, Cash Register Sales, Inventory, Reservations..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb4.jpg" altName="portfolio" h3="El Toreo" p="Custom Point of Sale, Logo, Marketing, Reporting, Printing, Cash Register Sales, Inventory, Reservations..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb5.jpg" altName="portfolio" h3="El Horizonte" p="Custom Point of Sale, Logo, Marketing, Reporting, Printing, Cash Register Sales, Inventory, Reservations..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb6.jpg" altName="portfolio" h3="Communicate With Class" p="Architecture Analysis, Plannning and Projection, Custom Website, seo, logo, content management, social media..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb7.jpg" altName="portfolio" h3="Classic Cleaners" p="Custom Laundry Sales, Point of sale, Clothes Manager, Customer Management, Sales Reporting, Printing, Sales, It Support.."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb8.jpg" h3="CenterPointe" altName="portfolio" p="Software Architecture Projection, Transformation of technologies from old to new, Data Management, DBA services, custom Website, seo, logo, content management, social media..."/>
      <PortfolioContent src="https://intuivo.com/2016/img/tb9.jpg" altName="portfolio" h3="Casa Latinos Unidos" p="Custom Website, seo, logo, content management, social media.."/>
    </div>
  </div>
  )
}