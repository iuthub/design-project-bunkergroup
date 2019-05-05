import React, {Component} from 'react';
import { Button, Row, Col,Form, Container, Badge,Media,Image } from 'react-bootstrap';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LinearProgress from '@material-ui/core/LinearProgress';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

export default class TimeTable extends Component{
    
    constructor(props)
    {
        super(props);

        this.state = {
        timeTable: undefined,
        isLoading: true,
    }
    }

    
   componentDidMount(){

    if( localStorage.getItem('timeTable') ){
      const storageTimeTable = localStorage.getItem("timeTable");
      this.setState({ timeTable: storageTimeTable, isLoading: false });
    } 
    else {
        if( localStorage.getItem('userData') ){
            var user = JSON.parse(localStorage.getItem('userData'));
            axios.post(`${API}/tt/byStudent`, {uuid: user.data.uuid})
            .then(res => {
            this.setState({timeTable: res.data, isLoading: false});
            
            localStorage.setItem("timeTable", res.data);
            console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            console.log("Sorry, your localStorage is undefined!");
          }
     }
    
   }

    render(){
    
        return(
            <div className="timeTableWrap">
            {this.state.isLoading ? <LinearProgress className="linearProgress"/> :  ReactHtmlParser(this.state.timeTable) }
            </div>
        )
    }

}
