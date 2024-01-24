// import logo from './logo.svg';
import './App.css';
import './components/Country.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';

function App() {
  const [myStyle, setMyStyle] = useState(
    {
      color: '#042743',
      backgroundColor: 'white'
    })
    
    const [setBtnText] = useState("Dark Mode")
  
    let toggleStyle = ()=>{
      if(myStyle.color === '#042743'){
          setMyStyle({
              color: 'white',
              backgroundColor: '#042743'
              
          })
          setBtnText("Light Mode")
      }
      else{
          setMyStyle({
              color: '#042743',
              backgroundColor: 'white'
          })
          setBtnText("Dark Mode"); 
      }
    }  
  return (
    <>
    <Router>
    <Navbar myStyle={myStyle} toggleStyle={toggleStyle}/>
    <div className="container ">
      <Routes>
        <Route path="/" element={<Country myStyle={myStyle}/>} />
        <Route path="/CountryDetails" element={<CountryDetails />} />
        
      </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;
