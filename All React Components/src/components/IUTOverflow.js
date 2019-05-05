import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const drawerWidth = 230;

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: `calc(90% - ${drawerWidth}px)`,
    },
  text: {
    fontWeight: "light",
    marginTop: "55px",
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginTop: "65px",
  },
  },
  paper: {
    paddingBottom: 2,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 9,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  fabButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
        right: theme.spacing.unit * 3,
        bottom: theme.spacing.unit * 3,
    },
  },
  greenAvatar: {
    width: 50,
    height: 50,
    color: '#fff',
    background: "linear-gradient(-45deg, #12c2e9, #c471ed)",
    backgroundSize: "400% 400%",
    animation: "Gradient 15s ease infinite",
  },
});

class IUTOverflow extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      title: "",
      body: "",
      isLoading: true,
    };
  }

  componentDidMount() {

    axios.get(`${API}/iutOverflow/question/all`)
        .then((response) => {
            this.setState({questions: response.data, isLoading: false});
            console.log(response);
            console.log(this.state.questions);
        }).catch((error) => {
          console.log(error);
        });
  }

  render() {

  const { classes } = this.props;
  return (
    <div>
            {this.state.isLoading ? <LinearProgress className="linearProgress"/> :   
    <div className={classes.root} className="IUTOverflowWrapper">
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
      <div className="IUTOverflowList">

        <List className={classes.list}>
        {this.state.questions.map(question =>
            <Fragment key={question.question.questionId}>
              <Link to={{ 
                pathname: `/question`,
                state: { questionId: question.question.questionId }
            }}>
              <ListItem button>
                <Avatar className={classes.greenAvatar}>{(question.question.student.firstName + " " + question.question.student.lastName).split(/\s/).reduce((response, word)=>response+=word.slice(0, 1),'')}</Avatar>
                <ListItemText secondary={"Tags: " + question.userTags.map(tags => 
                  tags.value.split(' ').map((s1) => " " + s1.charAt(0).toUpperCase() + s1.substring(1)).join(''))}>
                {question.question.title + " - " + (question.question.student.firstName + " " + question.question.student.lastName).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                </ListItemText>
                {question.amountOfAnswers == 1 ?
                  <Typography className={classes.margin} component="h2" variant="subtitle2" className="displayRight displayNone">                
                       {question.amountOfAnswers + " Answer" + " / " + question.views + " Views"}
                 </Typography> 
                   : <Typography className={classes.margin} component="h2" variant="subtitle2" className="displayRight displayNone">                
                  {question.amountOfAnswers + " Answers" + " / " + question.views + " Views" }
            </Typography> }
              </ListItem>
              </Link>
             
            </Fragment>
          )}
          <Link to={{ 
            pathname: `/askaquestion`
        }}>
          <Fab size="medium" color="secondary" aria-label="Add" className={classes.fabButton}>
            
            <AddIcon />
          </Fab>
          </Link>
        </List>
        </div>
      </Paper>
      
    </React.Fragment>
    </div>
      }
      </div>
  );
      }
      }
IUTOverflow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IUTOverflow);