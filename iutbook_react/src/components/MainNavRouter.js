import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';
import MainNav from './MainNav';
import EBooks from './eBook/EBooks';
import GroupChange from './GroupChange';
import TeamSearch from './TeamSearch';
import TimeTable from './TimeTable';
import IUTOverflow from './IUTOverflow';
import AskQuestion from './AskQuestion';
import FAQ from './FAQ';
import Question from './Question';
import LogIn from './LogIn';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
}

componentDidMount() {
  if( localStorage.getItem('userData') ){
      console.log('Welcome to IUTBook');
  } else {
    console.log('Please, log in');
    this.setState({redirect: true})
  }
}
  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    return (
      <BrowserRouter>
      <MainNav>
       <Switch>
            <Route path='/' exact component={ MainPage }></Route>
            <Route path='/ebooks' component={ EBooks }></Route>
            <Route path='/iutoverflow' component={ IUTOverflow }></Route>
            <Route path='/groupchange' component={ GroupChange }></Route>
            <Route path='/teamsearch' component={ TeamSearch }></Route>
            <Route path='/timetable' component={ TimeTable }></Route>
            <Route path='/askaquestion' component={ AskQuestion }></Route>
            <Route path='/faq' component={ FAQ }></Route>
            <Route path='/question/' component={ Question } />
            <Route path='/login' component={ LogIn }></Route>
            <Route component={ NotFoundPage }></Route>
       </Switch>
       </MainNav>
      </BrowserRouter>
    );
  }
}

export default App;
