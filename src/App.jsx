import './App.css'
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Home from './components/Home';
import { Contact } from './components/Contact';
import { NoPage } from './components/NoPage';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Reviews from './components/Reviews';

function App() {

  return (
    <div className='font-arial'>
    <Navbar className=""/>

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="projects" element={<Projects />} />
          <Route path="Events" element={<Events/>}/>
          <Route path="Reviews" element={<Reviews/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
    </Routes>

    </div>
  )
}

export default App
