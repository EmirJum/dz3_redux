import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourList from './components/TourList'
import {useState} from 'react';
import Mode from './components/mode/Mode';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutPage from './components/AboutPage';


function App() {
  const [mode, setMode] = useState({current:"day"})
  
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TourList/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/profile' element={<Mode mode={mode} changeMode={setMode}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
      
  )
}

export default App;