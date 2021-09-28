import React, { useEffect, useState, useContext} from 'react';
import './App.css';
import { AnchorList } from './Anchor/AnchorList.js';
import Separator from './Separator/Separator';
import MainStudents from './mainStudents/MainStudents.js';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer';
import { Students } from './Students/Students';
import './fonts/fonts.css'

export const MyContext = React.createContext()

export function App() {

  let [listAnchorNodes, setAnchorNodes] = useState([]);
  let [listAnchorParameters, setAnchorParametrs] = useState([]);

  let updateAnchors = (value) => setAnchorNodes(prev => [...prev, value]);

  useEffect(() => {
    listAnchorNodes.map(anchorNode => {
      setAnchorParametrs(prev => [...prev, {Y : anchorNode.current.getBoundingClientRect().top + window.pageYOffset, id: Date.now() + Math.random()}])
    })
    
  },[listAnchorNodes])
  
  return (
    <MyContext.Provider value={{
      listAnchorNodes, updateAnchors
    }}>
        <div className="App" >
            <Header/>
            <AnchorList anchors = {listAnchorParameters}/>
            <Separator text={'Мы даем возможность'}/>
            <MainStudents/>
            <Separator  text={'Наши студенты'}/>
            <Students/>
            <Footer/>
        </div>
      </MyContext.Provider>
  );
}