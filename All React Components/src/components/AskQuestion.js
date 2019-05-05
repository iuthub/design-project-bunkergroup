import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import NoSsr from '@material-ui/core/NoSsr';
import classNames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { components } from "react-select";
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
  placeholder: {
    left: 2,
    fontSize: 16,
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
  leftMargin: {
    marginLeft: '10px',
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      className="textFieldSelect"
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
    className
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      color="primary"
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

const Menu = props => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <div>
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
    <components.Menu {...props}>
      {optionSelectedLength < 5 ? (
        props.children
      ) : (
        <div style={{ margin: 15 }}>You can not enter more than 5 tags</div>
      )}
    </components.Menu>
    </div>
  );
};

const Components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class AskQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          single: null,
          multi: [],
          disabled: false,
          uuid: null,
          suggestions: [],
          uuid: null,
          title: "",
          body: "",
          redirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
      }

      handleRedirect = evnt => {
        evnt.preventDefault();
        this.setState({redirect: true});
      }
      
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        console.log(this.state.multi);
      };


      handleSubmit = e => {
        e.preventDefault();
        var userProfileData = {
          "question":
        {
          "student":
          {
            "uuid": this.state.uuid
          },
          "title": this.state.title, 
          "body": this.state.body 
        } , 
        "userTags": this.state.multi
      };
    
        console.log(this.state.title);
        axios.post(`${API}/iutOverflow/question`, userProfileData)
            .then((response) => {
              if(response.status=200){
                console.log("success");
                this.setState({redirect: true});
              } else {
                console.log("Error");
              }
            }).catch((error) => {
              console.log(error);
    
              console.log("Some Error");
    
            });
    
    };

      componentDidMount() {

        axios.get(`${API}/interest/userTag/all`)
            .then((response) => {
                this.setState({suggestions: response.data});
                console.log(response);
            }).catch((error) => {
              console.log(error);
            });

          if( localStorage.getItem('userData') ){
              console.log('User Logged In');
              var user = JSON.parse(localStorage.getItem('userData'));
              this.setState({uuid: user.data.uuid});
          } else {
            console.log("Some error");
          }
        }
    render(){
      if ( this.state.redirect ) {
        return (<Redirect to={'/iutoverflow'} />);
      }
        const { classes, theme } = this.props;
        const isValidNewOption = (inputValue, selectValue) => inputValue.length > 0 && selectValue.length < 5;
        const selectStyles = {
          input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
              font: 'inherit',
            },
          }),
        };
        return(
            <div className="container">
            <div className="row">    
            <div className="col-md-8">
            <Paper className={classes.root} elevation={1}>

            <div className={classes.container}>
            <div className="AskQuestionWrap">

            <Typography variant="h5" className={classes.grow} noWrap>
            Ask a Question
            </Typography>
            <form  onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <Typography className={classes.margin} variant="subtitle1" gutterBottom>
              Title
            </Typography>
            <TextField
            id="title"
            placeholder="What is your question?"
            className={classes.textFieldTitle}
            variant="outlined"
            onChange={this.handleChange('title')}
            required
          />
          <Typography className={classes.margin} variant="subtitle1" gutterBottom>
              Body
            </Typography>
          <TextField
            id="body"
            placeholder="Describe your question. Give more details"
            multiline
            rows="10"
            className={classes.textField}
            onChange={this.handleChange('body')}
            variant="outlined"
            required
          />
                
          
          <NoSsr>
          <Typography className={classes.margin} variant="subtitle1" gutterBottom>
              Tags
            </Typography>
          <CreatableSelect
            className={classes.textField}
            classes={classes}
            styles={selectStyles}
            options={this.state.multi != undefined && this.state.multi.length > 4 ? this.state.multi : this.state.suggestions}
            components={Components}
            defaultValue={this.state.multi}
            placeholder="Select tags related to your question"
            onChange={(values) => this.setState({ multi: values })}
            isValidNewOption={isValidNewOption}
            refs="tags"
            isMulti
            required
            />    
            </NoSsr>
            <div className="PostBtn">
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Post question
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
            How to Ask?
        </Typography>
        <hr />
        <div className="abstractBg">
        <Typography variant="Subheading" gutterBottom>
           In IUTOverflow we prefer questions that can be answered, not just discussed.
        </Typography>
        <Typography variant="Subheading" gutterBottom>
        We advise you to start your question with "What", "How", "Why", etc.
        </Typography>
        <Typography variant="Subheading" gutterBottom>
        Provide details. Share your research.
        </Typography>
        <Typography variant="Subheading" gutterBottom>        
        Before asking a question check "FAQ" category, is there an answer to your question.
        </Typography>
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
    </div>
        );
    }
}

AskQuestion.propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
  };

  
export default withStyles(styles, { withTheme: true })(AskQuestion);