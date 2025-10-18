// import Modal from "./components/Modal"
import { BrowserRouter } from "react-router-dom" 

import Header from "./sections/Header"
import HeroSection from "./components/HeroSection"


function App() {

  return (
    <div className="bg-[#302e2f] h-[100dvh] text-[#a0bd35]">
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
      <HeroSection/>
    </div>

  )
}

export default App
