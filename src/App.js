import React, { useEffect, useState} from 'react';
import './App.css';
import { AnchorList } from './Anchor/AnchorList.js';
import Separator from './Separator/Separator';
import MainStudents from './mainStudents/MainStudents.js';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer';
import { Students } from './Students/Students';
import './fonts/fonts.css'
export function App() {
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
            <MainStudents/>
            <Separator  text={'Наши студенты'}/>
            <Students/>
            <Footer/>
        </div>
  );
}