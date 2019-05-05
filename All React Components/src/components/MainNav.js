import React, { Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import QuestionAnswer from '@material-ui/icons/QuestionAnswerOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { MenuItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { compose } from 'recompose';
import Home from '@material-ui/icons/HomeOutlined';
import Schedule from '@material-ui/icons/Schedule';
import PersonAdd from '@material-ui/icons/PersonAddOutlined';
import Book from '@material-ui/icons/BookOutlined';
import FindReplace from '@material-ui/icons/FindReplace';
import ExitToApp from '@material-ui/icons/ExitToApp';
import LooksOne from '@material-ui/icons/LooksOneOutlined';
import LooksTwo from '@material-ui/icons/LooksTwoOutlined';
import Looks3 from '@material-ui/icons/Looks3Outlined';
import Looks4 from '@material-ui/icons/Looks4Outlined';
import AccountCircle from '@material-ui/icons/Person';
import Help from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import UserProfile from './UserProfile';
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

const drawerWidth = 230;

const color = createMuiTheme({
  overrides: {
    MuiMenuItem: {
     
      "selected": {
        background: "linear-gradient(-45deg, rgb(60, 231, 174), #339cda)",
        backgroundSize: "250% 250%",
        animation: "Gradient 15s ease infinite",
        color: '#fff !important',
      },
      },
    },
  palette: {
    primary: {
      light: '#000',
      main: '#2196f3',
      dark: '#2196f3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#4889E5',
      dark: '#2196f3',
      contrastText: '#fff',
    },
  },
  },
)


const styles = theme => ({
  root: {
    display: 'flex',
    color: "#000",
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
    color: '#555',
  },
  paddingRight: {
    paddingRight: theme.spacing.unit * 2,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    background: "linear-gradient(-45deg, #339cda, #36D1DC)",
    backgroundSize: "200% 200%",
    
  },
  menuButton: { 
    marginLeft: "-10px",
    marginRight: 8,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  
  backgroundColor: "#2196f3",
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  menuItemColor: {
    color: '#555',
  },
  navUserData: {
    overflow: 'hidden',
    height: "138px",
    padding: "12px",
    color: "#fff",
    backgroundColor: blue[500],
    backgroundImage: "url('https://wallpapersite.com/images/wallpapers/blur-background-3840x2400-spectrum-electromagnetic-4k-901.jpg')",
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  greenAvatar: {
    marginTop: "15px",
    marginBottom: "14px",
    width: 42,
    height: 42,
    color: '#fff',
    background: "linear-gradient(-45deg, #12c2e9, #c471ed)",
    backgroundSize: "400% 400%",
    animation: "Gradient 15s ease infinite",
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
      minWidth: "65%",
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
});


class ResponsiveDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      open: false,
      redirect: false,
      userName: "Student Name",
      userId: "Student Id",
      groupNo: "Group NO",
      appBarTitle: "IUTBook",
      uuid: null,
      anchorEl: null,
      messages: [],
      isLoading: true,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if( localStorage.getItem('userData') ){
        console.log('User Logged In');
        var user = JSON.parse(localStorage.getItem('userData'));
        this.setState({userName: user.data.firstName + ' ' + user.data.lastName, userId: user.data.userId, groupNo: user.data.group.department + user.data.group.noOfGroup, uuid: user.data.uuid});
        
      } else {
      this.setState({redirect: true})
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  logout(){
    localStorage.clear();
    this.setState({redirect: true})
}
  handleClick = event => {
    event.preventDefault();
    axios.post(`${API}//message/findAllByStudent`, {uuid: this.state.uuid})
            .then(res => {
            this.setState({messages: res.data, isLoading: false});
            console.log(res.data);
            console.log(this.state.messages[0].studentMessage.message.messageContent);
            })
            .catch((error) => {
                console.log(error);
            });
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: false,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    const { mobileOpen } = this.state;    const { classes, fullScreen, location: {pathname}, children } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const userFullName = this.state.userName.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    const userAvatar = this.state.userName.split(/\s/).reduce((response, word)=>response+=word.slice(0, 1),'');
    const userMainData = {userFullName: userFullName, userAvatar: userAvatar};
    localStorage.setItem('userMainData', JSON.stringify(userMainData));
    const drawer = (
      <div>
        <div className={classes.navUserData}>
          <Grid container >
          <Avatar className={classes.greenAvatar}>{userAvatar}</Avatar>
          </Grid>
          <h5>{userFullName}</h5>
          <p>{this.state.userId}, {this.state.groupNo}</p>
        </div>
        <MenuList>
          <MenuItem component={Link} className={classes.menuItemColor} to='/' selected={'/' === pathname}>
            <Home className={classes.paddingRight}/>
              Home
          </MenuItem>
          <MenuItem component={Link} className={classes.menuItemColor} to='/timetable' selected={'/timetable' === pathname}>
            <Schedule className={classes.paddingRight}/>
              Timetable
          </MenuItem>
          <MenuItem component={Link} className={classes.menuItemColor} to='/ebooks' selected={'/ebooks' === pathname}>
            <Book className={classes.paddingRight}/>
              E-books
          </MenuItem>
          <MenuItem component={Link} className={classes.menuItemColor} to='/iutoverflow' selected={'/iutoverflow' === pathname || '/askaquestion' === pathname || `/question` === pathname}>
            <QuestionAnswer className={classes.paddingRight}/>
              IUTOverflow
          </MenuItem>
          <MenuItem className={classes.menuItemColor} component={Link} to='/teamsearch' selected={'/teamsearch' === pathname}>
            <PersonAdd className={classes.paddingRight}/>
              Team Search
          </MenuItem>
          <MenuItem className={classes.menuItemColor} component={Link} to='/groupchange' selected={'/groupchange' === pathname}>
            <FindReplace className={classes.paddingRight}/>
              Group Transfer
          </MenuItem>
          <MenuItem className={classes.menuItemColor} component={Link} to='/faq' selected={'/faq' === pathname}>
            <Help className={classes.paddingRight}/>
              FAQ
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.logout} className={classes.menuItemColor} component={Link} to='/login'>
            <ExitToApp className={classes.paddingRight}/>
              Logout
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <MuiThemeProvider theme={color}>
      <Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} color="secondary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
            { pathname==='/' ? "IUTBook" : ( pathname==='/timetable' ? "Timetable" : (pathname==='/iutoverflow' ? "IUTOverflow" : (pathname==='/faq' ? "FAQ" : (pathname==='/teamsearch' ? "Team Search" : (pathname==='/groupchange' ? "Group Transfer" : (pathname==='/ebooks' ? "E-books" : (pathname==='/askaquestion' ? "IUTOverflow" : (pathname===`/question` ? "IUTOverflow" : "")))))))) }
            </Typography>
            
              <IconButton 
              color="inherit"
              aria-owns={open ? 'simple-popper' : undefined}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
              >
                    <NotificationsIcon  className={open ? "activeIcon" : "mainNavIconGradient"}/>
              </IconButton>
              {this.state.isLoading ? <LinearProgress/> : 
              <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 62, left: 895 }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                className={classes.popoverNotif}
              >
              <Paper square className={classes.paper}>
              <Typography className={classes.text} variant="h6" gutterBottom>
                Notifications
              </Typography>
              <IconButton aria-label="Close" className={classes.closeButton} onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
              <List className={classes.list}>
              {this.state.messages.length == 0 ? 
                <Fragment>      
                <ListItem>
                <ListItemText> You have not recieved any notifications yet. </ListItemText>
              </ListItem>
                  <Typography></Typography>
               </Fragment>
             
             : 
             <div>
             {this.state.messages.map(message1 =>
                <Fragment key={message1.studentMessage.message.messageId}>     
                <hr className="styledHr" />               
                    <ListItem button>
                      <ListItemText primary={message1.studentMessage.message.messageContent.charAt(0).toUpperCase() + message1.studentMessage.message.messageContent.slice(1)} />
                    </ListItem>
                    
                  </Fragment>
                )}
                </div>
              }
              </List>
            </Paper>
            </Popover>
              }
            <UserProfile />

          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
            { children }
        </main>
      </div>
      </Fragment>
      </MuiThemeProvider>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object,
  fullScreen: PropTypes.bool.isRequired,
};

export default compose( withMobileDialog(),
  withRouter,
  withStyles(styles),
)(ResponsiveDrawer);