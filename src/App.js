import './App.css';
import Home from './pages/Home';
import Associations from './pages/Associations';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
      <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/associations' element={< Associations />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
