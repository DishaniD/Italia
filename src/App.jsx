import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import DishCard from './Components/DishCard'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'
import Experties from './Components/Experties'

const App = () => {
  return (
<main className='overflow-y-hidden text-neutral-200 antialiased'> 
<HeroSection/>
<Navbar/>
<Dishes/>
<About/>
<Mission/>
<Experties/>

</main>
  )
}

export default App