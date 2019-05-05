import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/Person';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import Interests from './Interests';
import classNames from 'classnames';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import CreatableSelect from 'react-select/lib/Creatable';
import { components } from "react-select";
import Form from 'react-bootstrap';
import axios from 'axios';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const styles = theme => ({
    root: {
      display: 'flex',
      color: "#000",
      flexGrow: 1,
      height: 150,
      width: "100%",
    },
    grow: {
      flexGrow: 1,
    },
    profileAvatar:{
      display: "inline-block",
      padding: "15px",
      width: 60,
      height: 60,
      color: '#fff',
      background: "linear-gradient(-45deg, #12c2e9, #c471ed)",
      backgroundSize: "400% 400%",
      animation: "Gradient 15s ease infinite",
    },
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      color: "#444",
    },
    paper: {
      padding: 0,
    },
    subHeader: {
      backgroundColor: theme.palette.background.paper,
    },
    popoverNotif: {
      [theme.breakpoints.up('sm')]: {
        width: "65%",
        marginLeft: "460px",
        marginBottom: "60px",
    },
      marginTop: "8px",
      marginBottom: "45px",
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
    textField: {
      width: "100%",
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
      position: 'absolute',
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

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          single: null,
          multi: [],
          disabled: false,
          uuid: null,
          suggestions: [],
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(this.state.multi);
  };

  handleSubmit = e => {
    e.preventDefault();

    
    var userProfileData = {"student":{"uuid": this.state.uuid}, "userTags": this.state.multi, "userAbout": this.state.name};

    
    axios.post(`${API}/interest/studentInterestList`, userProfileData)
        .then((response) => {
          if(response.status=200){
            console.log("success");
          } else {
            console.log("Error");
          }
        }).catch((error) => {
          console.log(error);

          console.log("Some Error");

        });

    this.handleClose();
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
        this.setState({uuid: user.data.uuid, userId: user.data.userId, groupNo: user.data.group.department + user.data.group.noOfGroup});
        axios.post(`${API}/interest/byStudent`, { uuid: user.data.uuid })
        .then((response) => {
            this.setState({multi: response.data.userTags});
            this.setState({name: response.data.userAbout});
            console.log(response);
          
        }).catch((error) => {
          console.log(error);
        });
        // if( localStorage.getItem('userProfileData')){
        //   var userProfileData = localStorage.getItem('userProfileData');
        //   var userProfileDataParse = JSON.parse(userProfileData);
        //   this.setState({multi: userProfileDataParse.userTags});
        //   this.setState({name: userProfileDataParse.userAbout});

        // } else {
        //   console.log(this.state.multi);
        // }
    } else {
      console.log("Some error");
    }
  }

  render() {
    const { classes, fullScreen } = this.props;
    var userMainData = JSON.parse(localStorage.getItem('userMainData'));
    const isValidNewOption = (inputValue, selectValue) => inputValue.length > 0 && selectValue.length < 5;
    const { theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };
    return (
      <div>
        <IconButton fontSize="32px" color="inherit" onClick={this.handleClickOpen}>
            <AccountCircle className="mainNavIconGradient"/>
        </IconButton>
        <Dialog
            disableBackdropClick
            fullScreen={fullScreen}
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
          <IconButton aria-label="Close" className={classes.closeButton} onClick={this.handleClose}>
                <CloseIcon className="lightClose"/>
          </IconButton>
          <DialogContent>
          <div className="profileBg">
          <DialogContentText container className="profileStyle">
            <Avatar className={classes.profileAvatar}>{userMainData.userAvatar}</Avatar>
            <h2 className="MuiTypography-root-79 MuiTypography-title-85"> {userMainData.userFullName} </h2>
            <h3 className="MuiTypography-root-79 MuiTypography-title-85">{this.state.userId}, {this.state.groupNo}</h3>
          </DialogContentText>
          </div>
          <form onSubmit={this.handleSubmit}>
            <DialogContentText>
            <TextField
              focused="true"
              id="about"
              label="About"
              placeholder="Add a few words about yourself"
              color="primary"
              className={classes.textField}
              onChange={this.handleChange('name')}
              margin="normal"
              defaultValue={this.state.name}
            />
          <Typography component={'span'} variant={'body2'} className="grayFont">              
            Add a few lines about yourself. Anyone who opens your profile will be able to see this text.
          </Typography>
          
                <div className={classes.root} className="tagsInput">
                <NoSsr>
                  <CreatableSelect
                    classes={classes}
                    styles={selectStyles}
                    options={this.state.multi != undefined && this.state.multi.length > 4 ? this.state.multi : this.state.suggestions}
                    components={Components}
                    defaultValue={this.state.multi}
                    placeholder="Tags"
                    onChange={(values) => this.setState({ multi: values })}
                    isValidNewOption={isValidNewOption}
                    refs="tags"
                    isMulti
                    />
                  <div className={classes.divider} />
                  <Typography component={'span'} variant={'body2'} className="grayFont">              
                    A tag is a keyword or label that briefly describes your interests and skills. Note that you can not select more than 5 tags.
                  </Typography>
                  </NoSsr>
              </div>
            </DialogContentText>
           
          <DialogActions className="dialogActions">
            
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
          </form>
         
          </DialogContent>
          </Dialog>
      </div>
    );
  }
}

UserProfile.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default compose( withMobileDialog(), withStyles(styles, { withTheme: true }) )(UserProfile);