import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { Link } from "react-router-dom";
// import App from "../App";

class ChangeList extends Component {  
    render(){
        
        return(
            <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page not found!</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to={{ 
                    pathname: '/',
                }}>Back To Homepage</Link>
            </div>
            </div>
        );
    }
}
export default ChangeList;