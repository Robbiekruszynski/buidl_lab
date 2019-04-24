import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import TestFile from './TestFile';
import Main from './Main';
import ProjectPrint from './ProjectPrint';
import gif from "./assets/img/backgroundFont.gif";
import Rabbit from './Rabbit/Rabbit';
import Jirn from './Jirn/Jirn';
import eightNine from './eightNine/eightNine';
import FutureDays from './futureDays/futureDays';
import Project from './Project';
import NavBar from "./NavBar";



function App(){
    return (
      <div>
      <ProjectPrint/>
      <NavBar/>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/Rabbit' component={Rabbit}/>
            <Route path='/FutureDays' component={FutureDays}/>
            <Route path='/Jirn' component={Jirn}/>
            <Route path='/eightNine' component={eightNine}/>
          </Switch>

      </div>
    )
}

export default App;
