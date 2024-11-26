import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Menu from './Components/Menu'
import Review from './Components/Review'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div >
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id='dishes'>
          <Dishes />

          <div id='about'>
            <About />
          </div>

          <div id='menu'>
            <Menu />
          </div>

          <div id='review'>
            <Review />
          </div>
        </div>
      </main>
     
      </div>
      <Footer />
    </>
  )
}

export default App