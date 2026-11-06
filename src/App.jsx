import './App.css'
import Navbar from './landing/components/Navbar/Navbar'
import Hero from './landing/components/Hero/Hero'
import Marquee from './landing/components/Marquee/Marquee'
import WhatIs from './landing/components/WhatIs/WhatIs'
import BuildTogether from './landing/components/BuildTogether/BuildTogether'
import HowItWorks from './landing/components/HowItWorks/HowItWorks'
import EnterArena from './landing/components/EnterArena/EnterArena'
import GreatIdeas from './landing/components/GreatIdeas/GreatIdeas'
import FindYourPeople from './landing/components/FindYourPeople/FindYourPeople'
import FinalCTA from './landing/components/FinalCTA/FinalCTA'
import Footer from './landing/components/Footer/Footer'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import MyEvents from './pages/MyEvents'
import Journey from './pages/Journey'
import Initialization from './pages/Initialization'
import LoginTransition from './pages/LoginTransition'

function App() {
  if (window.location.pathname === '/login') return <Login />
  if (window.location.pathname === '/login-transition') return <LoginTransition />
  if (window.location.pathname === '/initializing') return <Initialization />
  if (window.location.pathname === '/dashboard') return <Dashboard />
  if (window.location.pathname === '/events') return <Events />
  if (window.location.pathname === '/my-events') return <MyEvents />
  if (window.location.pathname === '/journey') return <Journey />
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIs />
        <BuildTogether />
        <HowItWorks />
        <EnterArena />
        <GreatIdeas />
        <FindYourPeople />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App

