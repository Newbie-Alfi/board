import React from 'react';
import './App.css';
// import {BrowserRouter, Route} from "react-router-dom"
import AnchorList from './Anchor/AnchorList.js';
import Separator from './Separator/Separator';
import Main_students from './Main_students/Main_students.js';
import Header from './Header';
import Footer from './Footer/Footer';
import Students from './Students/Students';
import './fonts/fonts.css'
// import AddingAnchors from './StartJS/addingAnchorList.js';
// import CountAnchor from './StartJS/countAnchor';
// import Navbar from './Navbar/Navbar';
let text_separator1 = 'Мы даем возможность'
let text_separator2 = 'Наши студенты'


function App() {
  return (
    <div className="App">
        <Header />
        <AnchorList/>
        <Separator text={text_separator1}/>
        <Main_students/>
        <Separator  text={text_separator2}/>
        <Students/>
        <Footer/>
    </div>
  );
}

export default App;
