import React, { useEffect, useState, useContext, useCallback} from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import './App.css';
import { AnchorList } from './components/Anchor/AnchorList';
import Separator from './components/Separator/Separator';
import MainStudents from './components/mainStudents/MainStudents.js';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer';
import { Students } from './components/Students/Students';
import './fonts/fonts.css'
import { SelectionPanel } from './components/selectionPanel/SelectionPanel';
import { Navbar } from './components/Navbar/Navbar';
import { Registration } from './components/registration/Registration';
import { UserPage } from './components/userPage/UserPage';


export const MyContext = React.createContext()

export function App() {
  let [value, setValue] = useState("КТиИБ");
  let [listAnchorNodes, setAnchorNodes] = useState([]);
  let [listAnchorParameters, setAnchorParametrs] = useState([]);
  let updateAnchors = (value) => setAnchorNodes(prev => [...prev, value]);

  useEffect(() => {
      if(listAnchorNodes.length === 0) setAnchorParametrs([]);

      listAnchorNodes.map((anchorNode, i) => {
        if(anchorNode.current !== null)
          setAnchorParametrs(prev => [...prev, {Y : anchorNode.current.getBoundingClientRect().top + window.pageYOffset, id: Date.now() + Math.random()}])
        else {
          setAnchorParametrs([])
        }
      })
  },[listAnchorNodes])
  
  let updateCriteria = (value) => setValue(value);
  return (
    <Switch>
      <MyContext.Provider value={{
        listAnchorNodes, updateAnchors
      }}>
          <div className="App" >
              <Route exact path="/board">
                <Header/>
                <Separator text={'Мы даем возможность'}/>
                <MainStudents/>
                <Separator  text={'Наши студенты'}/>
                <SelectionPanel updateCriteria = {updateCriteria} value={value}/>
                <Separator  text={'Наши студенты'}/>
                <Students criteria = {value}/>
                <Footer/>
                <AnchorList anchors = {listAnchorParameters}/>
              </Route>
              <Route path="/registration">
                <Navbar/>
                <Registration/>
              </Route>
              <Route path="/user">
                <Navbar/>
                <UserPage></UserPage>
              </Route>
              <Route path="/admin">
                <Navbar/>
                <UserPage></UserPage>
              </Route>
              {/* <Redirect to="/board"/> */}
          </div>
        </MyContext.Provider>
      </Switch>
  );
}