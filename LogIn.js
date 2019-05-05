import React, { Component } from "react";
import Logo from "../images/Logo.png";
import { Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import history from 'history';
import axios from 'axios';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const userIdRegex = RegExp(
  /^[uU]1[456789][0-9]{5}$/
);


class LogIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      password: null,
      fullName: undefined,
      responseError: false,
      loggedIn: false,
      isLoading: false,
      formErrors: {
        userId: "",
        password: "",
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    
    switch (name){
      
      case "userId":
        formErrors.userId = userIdRegex.test(value)
          ? ""
          : "Please, enter valid user ID";
        break;
      case "password":
        formErrors.password = 
        formErrors.password = value.length < 8 ? "Please, enter valid password" : "";
        break;
      default:
        break;
    }
    
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  

  handleSubmit = e => {
      e.preventDefault();
      
      axios.post(`${API}/student/login`, { userId: e.target.elements.userId.value,
      password: e.target.elements.password.value })
        .then((response) => {
          if(response.status=200){
            this.setState({ loggedIn: true });
            localStorage.setItem('userData', JSON.stringify(response));
            this.props.history.push("/");
            this.setState({ isLoading: false });
          } else {
            console.log("Log In Error");
          }
        }).catch((error) => {
          console.log(error);
          this.setState({ responseError: true });
          this.setState({ isLoading: false });
        });
    
  };

  handleClick() {
    this.setState({ isLoading: true });
  }
  
  render() {
    if ( this.state.loggedIn ) {
      return (<Redirect to={'/'} />);
    }
    if ( localStorage.getItem('userData') ){
      return (<Redirect to={'/'} />);
    }
    const { formErrors } = this.state;
    const responseError = this.state.responseError;
    const { isLoading } = this.state;
    // const loggedIn = this.state.loggedIn;
    // const { from } = this.props.location.state || '/';
    
    return (
      <div className="wrapper">
        <div className="form-wrapper">
        <img src={Logo} className="App-logo" alt="Logo" />
        <p>To Log In enter your user ID and password.</p>
          <form onSubmit={this.handleSubmit} noValidate>      
            <div className="userId">
              <input
                autoFocus
                className={formErrors.userId.length > 0 ? "error" : null}
                placeholder="User ID"
                type="text"
                name="userId"
                noValidate
                defaultValue="u"
                onChange={this.handleChange}
              />
              {formErrors.userId.length > 0 && (
                <span className="errorMessage">{formErrors.userId}</span>
              )}
            </div>
            <div className="password">
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick : null} type="submit" disabled={!this.state.userId} disabled={!this.state.password}>
              {isLoading ? 'Loading…' : 'Log in'}
            </button>
            </div>
            { responseError==true && (
              <span className="response-error errorMessage">Please enter valid user values</span>
            ) }
          </form>
          
        </div>
        </div>
      )}
  }

export default LogIn;
