import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer.jsx'
import Tools from './Components/Tools.jsx'
import Casestudies from './Components/Casestudies.jsx'
import Research from './Components/Research.jsx'
import Contactus from './Components/Contactus.jsx'
export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* Public Routes  */}
          <Route path="/" element={<Home />} />
           <Route path="tools" element={<Tools />} />
           <Route path='Cases' element={<Casestudies/>}/>
            <Route path='research' element={<Research/>}/>
             <Route path='contact' element={<Contactus/>}/>



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}