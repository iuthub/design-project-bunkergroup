
import React,{Component} from 'react';
import { Row, Col,Form, Container ,ButtonToolbar,Button,Modal,ModalBody,ModalFooter,ModalTitle, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import axios from 'axios';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

export default class TeamModel extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      subjects : [],
      subject : "",
      professors: [],
      professor : "",
      professorname: "sarvar abdullaev",
      initialstudentamount:'1',
      studentAmount:"",
      subjectid : "",
      professorid : {},
      teamname: "",
      subjectname: "internet programming",
      professorFirstName:"",
      professorLastName: "",
      userId:"",
      userFirstName:"",
      userLastName: "",
      userGroupId:"",
      userGroupNum: "",
      userDepartment:"",
      userUUId:""
    }
   
    this.getProfessorNameValues = this.getProfessorNameValues.bind(this);
    this.getStudentAmountValue = this.getStudentAmountValue.bind(this);
    this.getSubjectNameValue = this.getSubjectNameValue.bind(this);
    this.getTeamNameValue = this.getTeamNameValue.bind(this);
    //this.HandleProfName = this.HandleProfName.bind(this);

  }
  getProfessorNameValues = (e) =>{
    this.setState({professorname: e.target.value});
  }
  getSubjectNameValue = (e) =>{
     this.setState({subjectname: e.target.value});
     this.setState({subjectname: e.target.value});
     var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index]
    var option =  optionElement.getAttribute('data-id');
    this.setState({
      subjectid: option,
    });
    console.log("option and subjectid");
     console.log(option);
     console.log(this.state.subjectid);
  
  }
  getStudentAmountValue = (e) =>{
    this.setState({initialstudentamount: e.target.value});
    console.log(this.state.initialstudentamount);

    axios.post(`${API}/staff/bySubject`,
     {subjectId : this.state.subjectid})
     .then(res =>{
       this.setState({
         professors : res.data,
       })
       var j=0;
       this.setState({
        professorid :this.state.professors[j].userId
       })
       j++;
       console.log(res);
       console.log(this.state.professors);
       console.log(res.data.userId);
       console.log(this.state.professorid);
       console.log("Success");
      })
   this.setState({studentAmount: this.state.initialstudentamount});
   console.log(this.state.studentAmount);
  }
  getTeamNameValue = (e) =>{
    this.setState({teamname: e.target.value});
  }
  HandleClick(){
    axios.post(`${API}/team/new`,
    {
     //staff:{firstName: this.state.professorFirstName},
     //staff:{lastName: this.state.professorLastName},
     staff:{userId: this.state.professorid},
     studentRequest:{uuid: this.state.userUUId},
     subject:{subjectId: this.state.subjectid},
     maxNoOfStudents : this.state.initialstudentamount,
     title : this.state.teamname
    })
    .then(result =>{
      console.log(result);
      //console.log(this.state.professorFirstName); this.state.studentAmount, this.state.subjectid,this.state.userUUId
      //console.log(this.state.professorLastName); this.state.professorid,this.state.teamname
      console.log(this.state.professorid);
      console.log(this.state.userUUId);
      console.log(this.state.subjectid);
      console.log(this.state.initialstudentamount);
      console.log("TRIUMF")
      console.log(result);
    })
    this.props.changeName(this.state.professorname, this.state.initialstudentamount, this.state.subjectname,this.state.teamname);
    this.props.onHide();
    
  }
  componentDidMount(){
    
  if(localStorage.getItem("userData")){
    var user = JSON.parse(localStorage.getItem("userData"));
    axios.post(`${API}/subject/byFS`, {fs: user.data.fs})
    .then(result => {
      this.setState({
        subjects: result.data,
        userId: user.data.userId,
        userFirstName: user.data.firstName,
        userUUId:user.data.uuid
      });
      var i=0;
      this.setState({
        subjectid: this.state.subjects[i].subjectId
      })
      i++;
      console.log(this.state.userId);
      console.log(result);
      console.log(this.state.subjectid)
      console.log(this.state.subjects.subjectId);
      console.log(this.state.userUUId);
  })
    console.log(user);
    //console.log(user.data.fs);
}

/*axios.get("http://cors-anywhere.herokuapp.com/http://34.76.166.90/staff/all")
    .then(res => {
    console.log(res); 
    this.setState({professors: res.data});
    });*/


  }
    render(){
      //console.log(this.state.initialstudentamount)
      console.log(this.state.professor);
     // console.log(this.state.initialstudentamount );
      console.log(this.state.subject);
     
      console.log(this.state.professorid);
      //console.log(this.state.professors.userId);  professorid : this.state.professors.userId,
      
        return(
            <div >
            <Container>
            <Row>
           
            <Col sm={4} xs={11}> 
            <Modal {...this.props} className="modelbox" size="md" centered>
            <ModalTitle className = "modeltitle">
                Create Team
            </ModalTitle>
            <ModalBody>
            <Form className="form-action">
            <FormGroup>

            <Row className="row0">
              <Col sm={10} xs={12}>
              <FormLabel className="labelname"> Team Name:</FormLabel>
              </Col>
              <Col sm ={12} xs={12}>
              <FormControl 
              type="text"
              placeholder="Enter your team name" 
              value={this.state.teamname} 
              name="Teamname"  
              required 
              onChange={this.getTeamNameValue}
              ></FormControl>
              </Col>
            </Row>

            <Row className="row3">
            <Col sm={10} xs={12}>
            <FormLabel className="labelname">Subject:</FormLabel>
            </Col>
            <Col sm ={12} xs={12}>
            <FormControl 
            as="select" 
            name="SubjectName"
            value={this.state.subjectname}
            onChange={this.getSubjectNameValue}

            >
            {this.state.subjects.map((subject,index)=>
            <option key={index}  data-id = {subject.subjectId}>{subject.subjectName}</option>
            )}
            </FormControl>
            </Col>
            </Row>
            

            <Row className="row2">
            <Col sm={4} xs={4}>
            <FormLabel className="labelname">Amount:</FormLabel>
            </Col>
            <Col sm={4} xs={4} >
            <FormControl 
            as="select"
            name="StudentAmount" 
            onChange={this.getStudentAmountValue}
            >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            </FormControl>
            </Col>
            </Row>
           
            <Row className="row1">
            <Col sm={12} >
            <FormLabel className="labelname"> Professor:</FormLabel>
            <FormControl 
            as="select" 
            name="Stuffsname" 
            value={this.state.professorname} 
            onChange={this.getProfessorNameValues}>
           
            {this.state.professors.map((professor,index )=>
            <option   key = {index}>{professor.firstName+ " " +professor.lastName} </option>
            )}
            </FormControl>
            </Col>
            </Row>
            </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
               
                <Button
                variant="success"
                onClick={this.HandleClick.bind(this)}>
                Create
                </Button>
            </ModalFooter>
            </Modal>
            </Col>
          
            </Row>
            </Container>
             
            </div>

        )
    }
}