import React, { useEffect, useState } from 'react';
import './App.css';
// import {BrowserRouter, Route} from "react-router-dom"
import { AnchorList } from './Anchor/AnchorList.js';
import Separator from './Separator/Separator';
import Main_students from './Main_students/Main_students.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer';
import Students from './Students/Students';
import './fonts/fonts.css'

function App() {
  let [anchors, setAnchors] = useState([]);

  useEffect(() => {
        let anchor__source = document.querySelectorAll(".anchor__source");
        let arrayFindAnchors = [];
        anchor__source.forEach(anchor => {
          arrayFindAnchors.push({
            Y : anchor.getBoundingClientRect().top + window.pageYOffset,
            id : Date.now() + Math.random()
          })
        })
        setAnchors([...anchors, ...arrayFindAnchors])
  },[])
  


  return (
      <div className="App" >
          <Header />
          <AnchorList anchors = {anchors}/>
          <Separator text={'Мы даем возможность'}/>
          <Main_students/>
          <Separator  text={'Наши студенты'}/>
          <Students/>
          <Footer/>
      </div>
  );
}

export default App;
