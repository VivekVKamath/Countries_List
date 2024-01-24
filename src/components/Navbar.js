import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
    const [myStyle, setMyStyle] = useState(
        {
          color: '#042743',
          backgroundColor: 'white'
        })
        
        const [btntext,setBtnText] = useState("Dark Mode")
      
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
      <div className="container my-4" >
        <nav className={` px-2 navbar fixed-top`} style={myStyle}>
          <div className="container-fluid container">
            <Link className={`navbar-brand `} to="/">
              <div style={myStyle} >Where in the world?</div>
            </Link>
            <button onClick={toggleStyle} style={myStyle} className="btn">
                {btntext}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}


