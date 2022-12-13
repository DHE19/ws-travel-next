import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { navLinks } from "../utils/navbar/navbarLinks"
import Hero from "../components/Hero"
import Places from "../components/Places"
import Features from "../components/Features"
import FeaturesTwo from "../components/FeaturesTwo"
export default function Home() {
  return (
    <>
    <Navbar navItems={navLinks}>
      <div className=" flex justify-center py-4">
        <button className=" button-style-one ">Reserva Ya!</button>
      </div>
    </Navbar>

    <Hero/>
    <Places/>
    <Features/>
    <FeaturesTwo/>
    <Footer/>
    </>

    
  )
}
