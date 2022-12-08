import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {HashRouter, Switch, Route } from "react-router-dom";
import Nopage from './components/Nopage';
import About_Us from './components/About_Us';

export class App extends Component {
  render() {
    return (

      <>
        <HashRouter>
          <Navbar />

          <hr />

          <Switch>
            <Route key={'general'} exact path="/"><News pagesize={'5'} country={'in'} category={'general'} /></Route>
            <Route key={'general'} exact path="/general"><News pagesize={'5'} country={'in'} category={'general'} /></Route>
            <Route key={'science'} exact path="/science"><News pagesize={'5'} country={'in'} category={'science'} /></Route>
            <Route key={'sports'} exact path="/sports"><News pagesize={'5'} country={'in'} category={'sports'} /></Route>
            <Route key={'technology'} exact path="/technology"><News pagesize={'5'} country={'in'} category={'technology'} /></Route>
            <Route key={'entertainment'} exact path="/entertainment"><News pagesize={'5'} country={'in'} category={'entertainment'} /></Route>
            <Route key={'health'} exact path="/health"><News pagesize={'5'} country={'in'} category={'health'} /></Route>
            <Route key={'business'} exact path="/business"><News pagesize={'5'} country={'in'} category={'business'} /></Route>
            <Route exact path="/about"><About_Us/></Route>
            <Route path="*"><Nopage/></Route>
          </Switch>
        </HashRouter>

      </>
    )
  }
}

export default App





















































