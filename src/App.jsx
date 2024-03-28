import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Assets from './components/Assets'

const App = () => {
  return(
    <div className='container'>
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/Assets" element={<Assets/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App