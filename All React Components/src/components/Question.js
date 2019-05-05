import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import purple from '@material-ui/core/colors/purple';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const styles = theme => ({
  root: {
    marginTop: "2px",
    ...theme.mixins.gutters(),
  },
grow: {
    flexGrow: 1,
    marginBottom: "15px",
  },
margin: {
  marginTop: '15px',
},
cssLabel: {
  '&$cssFocused': {
    color: purple[500],
  },
},
cssFocused: {}, 
cssUnderline: {
  '&:after': {
    borderBottomColor: purple[500],
  },
},
cssOutlinedInput: {
  '&$cssFocused $notchedOutline': {
    borderColor: purple[500],
  },
},
notchedOutline: {},
bootstrapRoot: {
  'label + &': {
    marginTop: theme.spacing.unit * 3,
  },
},
bootstrapInput: {
  borderRadius: 4,
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  border: '1px solid #ced4da',
  fontSize: 16,
  width: 'auto',
  padding: '4px 6px',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:focus': {
    borderRadius: 4,
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
},
bootstrapFormLabel: {
  fontSize: 20,
},
card: {
  minWidth: 250,
  marginTop: '50px',
  marginBottom: '30px',
},
title: {
  fontSize: 14,
},
pos: {
  marginBottom: 12,
},
container: {
    marginTop: '50px',
},
textFieldTitle:{
  width: '100%',
  height: '40px',
},
textField:{
    width: '100%',
},
input: {
  display: 'flex',
  padding: 0,
},
valueContainer: {
  display: 'flex',
  flexWrap: 'wrap',
  flex: 1,
  alignItems: 'center',
  overflow: 'hidden',
},
chip: {
  margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
},
chipFocused: {
  backgroundColor: emphasize(
    theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
    0.08,
  ),
},
noOptionsMessage: {
  padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
},
singleValue: {
  fontSize: 16,
},
leftMargin: {
  marginLeft: '10px',
},
paper: {
  position: 'absolute',
  zIndex: 1,
  marginTop: theme.spacing.unit,
  left: 0,
  right: 0,
},
divider: {
  height: theme.spacing.unit * 1,
},
  });

class Question extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        activeQuestion: "",
        uuid:  null,
        userAnswer: "",
        questionId: this.props.location.state.questionId,
        redirect: false,
        isLoading: true,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRedirect = this.handleRedirect.bind(this);
    }

    componentDidMount() {

        const questionId = this.props.location.state.questionId;
        if( localStorage.getItem('userData') ){
          axios.get(`${API}/iutOverflow/question/byId/${questionId}`)
            .then((response) => {
                this.setState({activeQuestion: response.data, isLoading: false})
            }).catch((error) => {
              console.log(error);
            });
          var user = JSON.parse(localStorage.getItem('userData'));
          this.setState({uuid: user.data.uuid});
      } else {
        console.log("Some error");
      }
    }

    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

    handleRedirect = evnt => {
      evnt.preventDefault();
      this.setState({redirect: true});
    }
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.questionId);
      console.log(this.state.userAnswer);
      var answerData = {
        "body": this.state.userAnswer,
        "question":
      {
        "questionId": this.state.questionId
      }, 
      "student": {
    
        "uuid": this.state.uuid
      }
      
    };
  
      axios.post(`${API}/iutOverflow/answer`, answerData)
          .then((response) => {
            console.log(response);
            this.setState({redirect: true});
          }).catch((error) => {
            console.log(error);
            console.log(error);
            console.log("Some Error");
  
          });
  
  };

    render(){
      if ( this.state.redirect ) {
        return (<Redirect to={'/iutoverflow'} />);
      }
        const { classes } = this.props;
    
        console.log("This is inside render");
        return(
            <div>
            {this.state.isLoading ? <LinearProgress className="linearProgress"/> :   
                  <div className="container">
                  <div className="row">    
                  <div className="col-md-8">
                  <Paper className={classes.root} elevation={1}>

                  <div className={classes.container}>
                  <div className="AskQuestionWrap">

                  <Typography variant="h5" className={classes.grow}>
                    {this.state.activeQuestion.question.title}
                  </Typography>
                  
                  <Typography className={classes.margin} variant="subtitle1" gutterBottom>
                  {this.state.activeQuestion.question.body}
                  </Typography>
                 
                <Typography className={classes.margin} className="darkGreen" component="h2" variant="subtitle2" gutterBottom>

                  | {this.state.activeQuestion.userTags.map(tags => 
                  tags.value.split(' ').map((s1) => " " + s1.charAt(0).toUpperCase() + s1.substring(1)).join('') + " | ")}
                
                </Typography>
                <Typography component="h2" variant="subtitle1" className={classes.grow}>
                    {"- " + (this.state.activeQuestion.question.student.firstName + " " + this.state.activeQuestion.question.student.lastName).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                </Typography>

                {this.state.activeQuestion.amountOfAnswers == 1 ?
                <Typography className={classes.margin} component="h2" variant="subtitle2" className="displayRight">                
                     {this.state.activeQuestion.amountOfAnswers + " Answer" + " / " + this.state.activeQuestion.views + " Views"}
               </Typography> 
                 : <Typography className={classes.margin} component="h2" variant="subtitle2" className="displayRight">                
                {this.state.activeQuestion.amountOfAnswers + " Answers" + " / " + this.state.activeQuestion.views + " Views" }
          </Typography> }
                    <hr />
                
                {this.state.activeQuestion.answers.map(answer => 
                  <div>
                  <Typography className={classes.margin} variant="subtitle1" className="answeredUser" gutterBottom>
                    {(answer.student.firstName + " " + answer.student.lastName).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                  </Typography> 
                  <Typography variant="subtitle1" gutterBottom>
                
                  {answer.body}
                  </Typography>
                  <hr />
                  </div>
                )}
                
                  <Typography className={classes.margin} variant="subtitle1" gutterBottom>
                  Your Answer
                </Typography> 
                <form  onSubmit={this.handleSubmit} noValidate autoComplete="off">

                <TextField
                  id="answer"
                  placeholder="Type your answer inside this field"
                  multiline
                  rows="10"
                  className={classes.textField}
                  onChange={this.handleChange('userAnswer')}
                  variant="outlined"
                />
                <div className="PostBtn">
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Post answer
                  </Button>
                  <Button onClick={this.handleRedirect} className={classes.leftMargin} color="primary">
                    Cancel
                  </Button>
                </div>
                </form>
                </div>
                </div>
                </Paper>
                </div>
                <div className="col-md-4">
                <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                  How to Answer?
              </Typography>
              <hr />
              <div className="abstractBg">
              <Typography variant="Subheading" gutterBottom>
                In IUTOverflow we prefer short and clear answers. 
              </Typography>
              <Typography variant="Subheading" gutterBottom>
              Read the question carefully, as well as other answers that have already been posted.
              </Typography>
              <Typography variant="Subheading" gutterBottom>
              We don't expect every answer to be perfect, but answers with correct spelling, punctuation, and grammar are easier to read.</Typography>
              </div>
            </CardContent>
          </Card>
          </div>
          </div>
          </div>
        }
            </div>
        );
    }
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Question);