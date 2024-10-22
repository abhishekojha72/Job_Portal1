
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import './App.css'

// import Header from './Components/Header'
import Jobcard from './Components/Jobcard'
import Work from './Components/Work'
import Icone from './Components/Icone'
import Footer from './Components/Footer'
import Jobdetails from './Components/Jobdetails'
import Home from './Components/Home'





function App() {
  

  return (
    <>
    
    
    
    

    <Router>
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='Jobcard' element={<Jobcard/>}/>
             <Route path='Work' element={<Work/>}/>
             <Route path='Icone' element={<Icone/>}/>
             <Route path='Footer' element={<Footer/>}/>
             <Route path='/Jobdetails' element={<Jobdetails/>}/>
        </Routes>
    </Router>


    </>
  )
}

export default App
