import './App.css';
import Home from './pages/Home';
import Associations from './pages/Associations';
import About from './pages/About';
import News from './pages/News';
import Login from './pages/Login';
import Donation from './pages/Donation';
import Article from './pages/Article';
import CreateArticle from './pages/CreateArticle';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
      <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/admin/login' element={< Login />}></Route>
            <Route exact path='/admin/create' element={< CreateArticle />}></Route>
            <Route exact path='/associations' element={< Associations />}></Route>
            <Route exact path='/donate' element={< Donation />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/news' element={< News />}></Route>
            <Route exact path='/article' element={< Article />}></Route>
            {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
