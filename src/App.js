import React, {Component} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import StudentDetails from './Pages/StudentDetails.js';
import Read from './Read.js';
import Update from './Update.js';

// import AllUsers from './Component/AllUsers';
// import AddUser from './Component/AddUser';
// import EditUser from './Component/EditUser';
// import NotFound from './Component/NotFound'; 

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/StudentDetails' element={<StudentDetails/>}/>
            <Route path='/Read' element={<Read/>}/>
            <Route path='/Update' element={<Update/>}/>
{/* 
            <Route path="/all" element={<AllUsers />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route element={<NotFound />} /> */}

          </Routes>
      <Footer />
    </div>
  );
}

export default App;
