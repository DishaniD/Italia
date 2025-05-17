import React from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import DishCard from './Components/DishCard'
import Dishes from './Components/Dishes'

const App = () => {
  return (
<main className='overflow-y-hidden text-neutral-200 antialiased'> 
<HeroSection/>
<Navbar/>
<Dishes/>

</main>
  )
}

export default App