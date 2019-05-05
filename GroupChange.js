import React, { Component,Fragment } from "react";
import {  Row, Col,Form, Container,Table, Badge,Media,Image,ListGroup,ListGroupItem } from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import axios from 'axios';
//import  Exchange from './axiosget.js';
import Autocomplete from  'react-autocomplete'; 
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

export default class GroupChange extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '' ,
      students : [],
      togroup : [],
      fromgroup : [],
      studentname : "",
      studentuserid : "",
      studentuuid: "",
      fromgroup : "",
      newstudentlist: [],
      senduuid: " ",
      
      studenttransferid: [
        {transid:  ""}
      ],
     
      };
      this.showStudentList = this.showStudentList.bind(this);
      this.sendWorningMessage = this.sendWorningMessage.bind(this);
     
    }
    
  showStudentList(){
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log(user);
    this.setState({
      senduuid: user.data.uuid
    })
    const stduuid = user.data.uuid;
    const stdgroupid = user.data.group.groupId
     const stdname = user.data.firstName;
      const stdid =  user.data.userId;
      const stdfromgroup = user.data.group.department+" "+user.data.group.noOfGroup;
      const stdtogroup = this.state.value;
      //const {transId} = this.state; 
      console.log(user);
      console.log("new data");
      console.log(stdgroupid);
      console.log(stduuid);
  
    axios.post(`${API}/transfer/new`,{
     studentRequest:{uuid: stduuid},
     toGroup: {groupId: stdgroupid}
    })
    .then(res => {
      if(res.status == 200)
      {
        alert("Your trasnfer has been applied");
        const item = this.state.newstudentlist;
        item.push({stdname,stdid,stdfromgroup,stdtogroup});
        this.setState({newstudentlist: item});
        console.log("Success");
        console.log(res);
      }else{
        alert("Your transfer has not been applied! Please try again")
        console.log("Oxshamadi");
      }
     
    })


  }

  sendWorningMessage(e){

   console.log("transferId");
   console.log(e.target.id);
   const user = JSON.parse(localStorage.getItem('userData'));
    console.log(user);
    
    console.log("Student uuid");
    console.log(this.state.studentuuid);
   axios.post(`${API}/transfer/addStudent`,{
    studentResponse:{uuid: this.state.studentuuid},
    transferId: e.target.id
   })
   .then(response =>{
     if( response.status = 200){
       window.alert("Groupchange have been  done successfully");
       console.log("Here");
              console.log(response.data);
     }else{
       window.alert("FUCK BIG");
     }
   })
    console.log(e.target.id);
  }
 
   
   componentDidMount(){
    const user = JSON.parse(localStorage.getItem('userData'));
    this.setState({
     studentname: user.data.firstName + " " + user.data.lastName,
     studentuserid: user.data.userId,
     studentuuid: user.data.uuid,
     fromgroup: user.data.group.department+" "+user.data.group.noOfGroup
    }) 
     axios.get(`${API}/transfer/all`)
     .then(result =>{
      this.setState({
        students: result.data
      })
    
    })
  }


    render() {
      console.log(this.state.students);
      console.log(this.state.name);
      console.log(this.state.studentid);
      console.log(this.state.fromgroup);
      console.log(this.state.togroup);
      
      console.log(this.state.value);
      console.log("student name");
      console.log(this.state.studentname);
      console.log("studunt userID");
      console.log(this.state.studentuserid);
      console.log("studunt group");
      console.log(this.state.fromgroup);
      console.log('new name');
      console.log(this.state.stdname);

      console.log("new items");
      console.log(this.state.stdname);
      console.log("student uuid");
      console.log(this.state.senduuid);
      console.log("studunt group id");
      console.log(this.state.stdfromgroup);
      console.log("studunt userID");
      console.log(this.state.stdtogroup);
     
      const {students} = this.state;
      
        const studentslist = students.length ?(
          students.map((student,index) =>{
          console.log(student.transferId);
          return(
        
            <List key={student.transferId} component="nav" className="studentlist" >
             <ListItem button >
              <ListItemIcon>
              <Checkbox className="checkbox"></Checkbox>
              </ListItemIcon>
              <ListItemText className="listitems">{(student.studentRequest.firstName + " " + student.studentRequest.lastName).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</ListItemText>
              <ListItemText className="listitems">{student.studentRequest.userId}</ListItemText>
              <ListItemText className="listitems">{student.studentRequest.group.department+ " "+student.toGroup.noOfGroup}</ListItemText>
              <ListItemText className="listitems">{student.toGroup.department+ " " +student.toGroup.noOfGroup}</ListItemText>
              <Button
              variant="contained" 
              color="primary" 
              className="listbutton"
              onClick={this.sendWorningMessage} 
              id ={student.transferId}>
              Send</Button>
             </ListItem>
            </List>
              )
          })
        ) 
        :(
          <CircularProgress/>
        );
        const {newstudentlist} = this.state;
        const displaystudents = newstudentlist.map((item,index) =>{
          return(
           <List key={index} component="nav" className="studentlist" >
           <ListItem button >
            <ListItemIcon>
            <Checkbox className="checkbox"></Checkbox>
            </ListItemIcon>
            <ListItemText className="listitems">{item.stdname}</ListItemText>
            <ListItemText className="listitems">{item.stdid}</ListItemText>
            <ListItemText className="listitems">{item.stdfromgroup}</ListItemText>
            <ListItemText className="listitems">{item.stdtogroup}</ListItemText>
            <Button variant="contained" color="primary" className="listbutton">Send</Button>
           </ListItem>
          </List>
          
           )}
         );


      return (
        <div className='GroupChangeWrapper'>
          <Container>
          <Row>
          <Col >
          <Autocomplete
            name="transfervalue"
            value={ this.state.value }
            inputProps={{ id: 'states-autocomplete' }}
            items={ getStocks() }
            getItemValue={ item => item.name }
            shouldItemRender={ matchStocks }
            onChange={(event, value) => this.setState({ value })  }
            onSelect={value => this.setState({ value }) }
            renderMenu={ children => (
              <div className = "menu">
                { children }
              </div>
            )}
            renderItem={ (item, isHighlighted) => (
              <div
                className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                key={ item.abbr } >
                { item.name }
              </div>
            )}
          />
          </Col>
          <Col>
          <Button 
          variant="contained" 
          color="primary" 
          type="button" 
          onClick={this.showStudentList}
          >
          Transfer
          </Button>
          </Col>
          </Row>
          <Row> 
          <Col sm={{offset:1,span:2}} md={2} xs={3} className="listcolumns">
          <ListGroup><ListGroupItem className="listheader">Name</ListGroupItem></ListGroup >
          </Col >
          <Col sm={3} md={2} xs={3}>
          <ListGroup ><ListGroupItem  className="listheader">ID</ListGroupItem></ListGroup >
          </Col>
          <Col sm={2} md={2} xs={3}>
          <ListGroup ><ListGroupItem className="listheader">From</ListGroupItem></ListGroup >
          </Col> 
          <Col sm={3} md={2} xs={3}>
          <ListGroup ><ListGroupItem className="listheader">To</ListGroupItem></ListGroup >
          </Col>
          </Row>
          <br/>
          <Row >
          <Col sm={{offset:0.5, span:10}} className="listcolumn">
          {studentslist}
          {displaystudents}
          </Col>
          </Row>
          </Container>
        </div>
       
        )
      }
    }
export function getStocks() {
  return [
    { abbr:'cse',name: 'CSE-17-10' },
    { abbr: 'CSE', name: 'CSE-17-11' },
    { abbr: 'ce', name: 'CSE-17-12' },
    { abbr: 'sce', name: 'CSE-17-13' },
    { abbr: 'ces', name: 'CSE-17-14' },
    { abbr: 'ccse', name: 'CSE-17-15' },
    
  ];
}
export function matchStocks(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}