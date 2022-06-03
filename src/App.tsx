import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Todolist } from './components/Todolist';
import { Privateroute } from './privateroute/privateroute';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Privateroute>
        <Todolist/>
       </Privateroute>}/>
       <Route path="/login" element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
