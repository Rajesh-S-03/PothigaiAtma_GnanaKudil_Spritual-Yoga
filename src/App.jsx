import './App.css'
import Ec1 from './Components/EventPageComponents/Ec1'
import SC1 from './Components/SocialActivityPage/SC1'
import TC1 from './Components/TrainingPageComponents/TC1'
import About from './Pages/About'
import Home from './Pages/Home'
import ScrollTop from './Components/ScrollTop'

import { Routes,Router, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <ScrollTop/>
    <Routes>
      <Route path="/" element ={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/trainings" element={ <TC1/>} />
      <Route path="/events" element={<Ec1/>} />
      <Route path="/activities" element={<SC1/>} />
    </Routes>
    </>
  )
}

export default App
