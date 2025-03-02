import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtlis - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtlis - Amzing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtlis - Bad Mode';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtlis - Light Mode';
    }   
  }
     
  return (
    <>
    {/* <Router> */}
   
      <Navbar title="TextUtils" About="About us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/> 
      {/* <Navbar/> */}
      {/*<Navbar title="Textutlis" /> */}
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/" element={ */}
            <Textform showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />
            {/* } /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />
          </Route> */}
        {/* </Routes> */}
        
        {/* <About /> */}
        </div>
        {/* </Router>  */}
      
      
    </>
  );
}

export default App;




