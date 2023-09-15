import './App.css';
import { useState } from "react";
//import About from "./About";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"*/

function App(){

  const [mode,setDarkMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const show_alert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };


  const toggleMode = ()=>{
    if(mode==="light"){
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      show_alert("Dark Mode has been Enabled","success");
    }
    else{
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      show_alert("Light Mode has been Enabled","success");
    }
  };
  return (
  <>
  {/*<Router>*/}
  <Navbar title = "TextUtils" mode={mode} aboutText = "About TextUtils" toggleform={toggleMode} />
  <Alert alert = {alert}/>

  <div className="container my-3">
  {/*<Routes>*/}
    {/*<Route path='/about' element={<About/>} />*/}
    <TextForm heading = "Enter the text to analyze Below" mode={mode} show_alert = {show_alert}/>
  {/*</Routes>*/}
  </div>
  {/*</Router>*/}
    </>
  );
}

export default App;