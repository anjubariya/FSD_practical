import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Contect from './Components/Contect/Contect';
import About from './Components/About/About';

function App() 
{
  return(
     
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contect" element={<Contect/>} />
    </Routes>
    </BrowserRouter>
    
);

}

export default App;
