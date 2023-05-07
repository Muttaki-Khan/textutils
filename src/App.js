import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert =(message,type)=>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 2500);

  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Activated","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated","success")
    }

  }

  const redMode =()=>{
    if(mode === 'light'){
      setMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert("Red Mode Activated","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated","success")
    }

  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="Mkhan" about="About us" mode={mode} toggleMode={toggleMode} redMode={redMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <TextForm showAlert={showAlert} heading="Enter your text here"  mode={mode} /> */}
    <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
