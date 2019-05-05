import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import LogIn from './components/LogIn';
import MainPage from './components/MainPage';
import NotFoundPage from './components/NotFoundPage';
import MainNavRouter from './components/MainNavRouter';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
            <Route path='/' exact component={ MainNavRouter }></Route>
            <Route path='/login' component={ LogIn }></Route>
            <Route path='/ebooks' component={ MainNavRouter }></Route>
            <Route path='/iutoverflow' component={ MainNavRouter }></Route>
            <Route path='/groupchange' component={ MainNavRouter }></Route>
            <Route path='/teamsearch' component={ MainNavRouter }></Route>
            <Route path='/timetable' component={ MainNavRouter }></Route>
            <Route path='/askaquestion' component={ MainNavRouter }></Route>
            <Route path='/faq' component={ MainNavRouter }></Route>
            <Route path='/question/' component={ MainNavRouter } />
            <Route component={ NotFoundPage }></Route>
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
