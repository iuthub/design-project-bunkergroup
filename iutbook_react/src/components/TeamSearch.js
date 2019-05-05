import React,{Component} from 'react';
import {ButtonToolbar,Modal,ModalDialog,ModalTitle,Row,Container,Col, ModalBody} from 'react-bootstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TeamModel from './TeamModel';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
//import {List,ListItem,ListItem,ListItemText} from '@material-ui/core/List';
import axios from 'axios';
import  Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const styles = theme => ({
  card: {
    marginTop: '30px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px',
  },
    minWidth: 250,
    marginBottom: '30px',
  },
  marginTopButton:{
    marginTop: "15px",
    marginBottom: "-30px",
  }
});

class TeamSearch extends Component{
  constructor(props){
    super(props);
   this.state = { 
     modalShow: false,
     itemArray : [],
     teamDetails: [],
     professorname : "",
     studentamount : "",
     subjectname : "",
     teamName : "",
     open : false,
     teamid: "",
     teamNum : "",
     displayteammembers : [],
     teamMember: [],
     teamidpost : "",
     displayteam: [],
     displayteams: [],
     dipslayname: "",
     displaysubject: "",
     showresult: false,
     displayteamname: [],
     displayteammembers: "",
     isLoading: true,
   }
   
   this.handleChange = this.handleChange.bind(this);
   this.handleClickOpen = this.handleClickOpen.bind(this);
   this.handleClose = this.handleClose.bind(this);
  
  
  }
  
   onChangeName(name,amount,subject,teamname){
     this.setState({
       professorname : name,
       subjectname : subject,
       studentamount : amount,
       teamName : teamname,
     })

    const item = this.state.itemArray;
    item.push({name,amount,subject,teamname});
    this.setState({itemArray: item});
    }

    handleChange = index => (event, expanded) => {
       
      this.setState({
      expanded: expanded ?  index : false,
      });
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
    showWarningAlert(){
      window.alert("You have already added");
    }
  
    handleTeamId(e) {
      var user = JSON.parse(localStorage.getItem("userData"));

      axios.post(`${API}/team/${e.target.id}/addMember`,
     {uuid : user.data.uuid})
     .then(result =>{
      console.log("addMember");
      console.log(result);
      console.log(result.data.uuid);
     
      if(result.status = 200){
        console.log("111111111");
        window.alert("Your are added seccussfully")
      }
      else{
        console.log("000000000");
        window.alert("Sorry, Team is full");
      }
     })
     this.setState({
      teamidpost : e.target.id
     })
      console.log(e.target.id);
      
    }

     //Use it for TeamMembers
    handleTeamMembers(e){
      this.setState({ open: true });
      axios.post(`${API}/team/allByTeamId/`,
      {
        teamId: e.target.id
      })
      .then(result => {
        this.setState({
          displayteammembers: result.data
        })
        console.log(result);
      })
    
    }

    componentDidMount(){
      if( localStorage.getItem('userData') ){
        var user = JSON.parse(localStorage.getItem('userData'));
        axios.post(`${API}/team/byFS`, {fs: user.data.fs})
      .then((result) =>{
        this.setState({
          displayteam: result.data,
          isLoading: false,
        })
      })
        .catch((error) => {
            console.log(error);
        });
    } else {
        console.log("Sorry, your localStorage is undefined!");
      }
      

    }

  render(){
  
    const { expanded } = this.state;
    const { classes } = this.props;
    const {displayteam}  = this.state;
    const displayteamlist = displayteam.length ? (
    displayteam.map((displayteam,index) =>{
      const { expanded } = this.state;
      return(
        <div className="TeamSearchWrapper" 
        key={displayteam.teamId}>
        <Row  className = "expansionpanels" >
        <Col md={10} xs = {12}>
        <ExpansionPanel 
         expanded={expanded === index } 
         onChange={this.handleChange(index)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          
          <Col md = {6} xs ={6}>
          <Typography><label className="subjectname">{displayteam.subject.subjectName.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</label></Typography>
          </Col>
          <Col md = {6} xs = {6}>
          <Typography >
            <label className="subjectheader">
            {displayteam.staff.firstName+" "+displayteam.staff.lastName}
            </label>
          </Typography>
          <Typography>
            Team:  <label className="teamname">
            {displayteam.title}</label>
          </Typography>
          </Col>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Button  
          color="primary"
          className="joinbutton" 
          onClick ={this.handleTeamId.bind(this)} 
          variant="success"
          id={displayteam.teamId}>
          Join
          </Button>
          <Button  
          className="memberbutton" 
          variant="outline-info"
          id={displayteam.teamId} 
          onClick={this.handleTeamMembers.bind(this)}
          >Team Members
          </Button>
          
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </Col>
        </Row>
        </div>
      )
    }) 
    )
    :(
      <div className="warningtext">{this.state.isLoading ? <CircularProgress/>:<Typography variant="subtitle1">No teams have been created yet. Create your own one!</Typography>}</div>
    );

 const {displayteammembers} = this.state;
    const displayteammemberslist = displayteammembers.length ?(
      displayteammembers.map((displayteammember,index) => {
          return(
            <div>
        <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle  onClose={this.handleClose}>
            Team Members
            </DialogTitle>
            
            <DialogContent >
            <Row>
            
            <Col md = {5} xs ={6} className="teamMember">
            {displayteammembers.map((displayteammember,index) => {
            return(
              
            <DialogContentText key= {index} id="alert-dialog-description" >
            <Row className="teammembers">
            <Col md ={1} xs={1}>
            <Avatar className="avatardesign"> 
            ST
            </Avatar>
            </Col>
            <Col md ={{offset: 2, span: 3}} xs={{offset: 2, span: 3}} >
            {displayteammember.firstName + " " + displayteammember.lastName}
            </Col>
            </Row>
            </DialogContentText>
                )}
              )}
            </Col>
            </Row>
              </DialogContent>
            
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
            </div>
          )
          })
    ):(
      <div> </div>
    );

   // console.log(this.state.teamid); 
    let modalClose = () => this.setState({ modalShow: false });
    return(
      <div className="TeamSearch">
      <br/>
      <Container>
    <Row>
    <Col md={8} xs={12}>
    {displayteamlist}
      {displayteammemberslist}
    {this.state.itemArray.map( (item,index) => {
      return(
      <div className="TeamSearchWrapper" key = {index}>
      <Row>
      <Col md={10} xs={12}>
      <ExpansionPanel  className = "expansionpanels"  expanded={expanded === index } onChange={this.handleChange(index)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        
        <Col md = {6} xs ={6}>
        <Typography><label className="subjectname">{item.subject}</label></Typography>
        </Col>
        <Col md = {6} xs = {6}>
        <Typography ><label className="subjectheader">{item.name}</label></Typography>
        <Typography>Team:  <label className="teamname">{item.teamname}</label></Typography>
        </Col>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="ExpansionPanelDetails">
        <Button  
        className="joinbutton" 
        onClick ={this.showWarningAlert.bind(this)} 
        variant="success"
        color="primary"
        >Join
        </Button>
        <Button  
        className="memberbutton" 
        variant="outline-info" 
        onClick={this.handleTeamMembers.bind(this)}
        color="primary"
        >Team Members
        </Button>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
          
        </Col>
        </Row>
        </div>     
        )}
    )
      }
      </Col>
      <Col md={4}>
      <Card className={classes.card}>
  <CardContent>
    <Typography variant="h6" gutterBottom>
        Could not find team?
    </Typography>
    <hr />
    <div className="abstractBg">
    
    <Typography variant="Subheading" gutterBottom>
    Read all questions and answers that have been posted here carefully.
    </Typography>
    <Typography variant="Subheading" gutterBottom>        
    If you did not find an answer to your question, you can ask it in IUTOverflow.
    </Typography>
    <Typography variant="Subheading" gutterBottom>
       Note that in IUTOverflow we prefer questions that can be answered, not just discussed.
    </Typography>
    
    <Button variant="contained" color="primary" className={classes.marginTopButton} onClick={() => this.setState({ modalShow: true })}>
              Create Team
            </Button>
            <TeamModel
              show={this.state.modalShow}
              onHide={modalClose}
              changeName = {this.onChangeName.bind(this)}
            />
    </div>
  </CardContent>
</Card>
    </Col>
    
    </Row>
    </Container>
    </div>
    )
    
  }
  
}
export default withStyles(styles)(TeamSearch);