import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import DishCard from './Components/DishCard'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'
import Experties from './Components/Experties'
import Reviews from './Components/Reviews'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

const App = () => {
  return (
<main className='overflow-y-hidden text-neutral-200 antialiased'> 
<HeroSection/>
<Navbar/>
<Dishes/>
<About/>
<Mission/>
<Experties/>
<Reviews/>
<ContactSection/>
<Footer/>


</main>
  )
}

export default App