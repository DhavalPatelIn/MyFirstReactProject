import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Notfound from './pages/404page';

import Header from './components/header';
import Footer from './components/footer';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='*' element={<Notfound/>} />
            </Routes>      
            <Footer />
        </Router>
    </div>
  );
}

export default App;
