import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navigation/Nav'


import Home from './Pages/Home'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
