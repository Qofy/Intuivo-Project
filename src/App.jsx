// import Modal from "./components/Modal"
import { BrowserRouter } from "react-router-dom" 

import Header from "./sections/Header"
import HeroSection from "./sections/HeroSection"
import Content from "./sections/content"


function App() {

  return (
    <div className="bg-[#302e2f] h-[100dvh] text-[#a0bd35] px-3">
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
      <HeroSection/>
      <Content/>
    </div>

  )
}

export default App
