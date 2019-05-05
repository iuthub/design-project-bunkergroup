import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
  }
});


class FAQ extends Component{
    
  constructor(props){
  super(props);
  this.state = {
    mapfromserver : "",
    item: [],
    question : "",
    answer: "",
    questiontitle: "",
    expanded : null,
    isLoading: true,
  }
}
  componentDidMount(){
    axios.get(`${API}/iutOverflow/faq/all`)
    .then(result => {
      console.log(result);
      console.log("Succes");
      this.setState({
        item : result.data, isLoading: false
      })
      console.log(this.state.item);
      console.log("question")
      console.log(this.state.question);
      console.log("answer");
      console.log(this.state.answer);
    })
  }

   handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      });
   };

    render(){
        const {expanded} = this.state;
        const { classes } = this.props;
        return(
            <div>
            {this.state.isLoading ? <LinearProgress className="linearProgress"/> :   
        <div className="FAQ">
        <Container>
        <Row>
        <Col md={8} xs={12}>
        {
        this.state.item.map((item,index) =>{
          return(
            <Row className="rowStyle" key={index}>
            <Col md={8} xs={12}>
              <ExpansionPanel
               expanded={expanded === index} 
               onChange={this.handleChange(index)}
               className="panelStyle"
               >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="fontstyle">{item.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography className="fontstyle2">{item.answer}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>       
            </Col>
            </Row>
            
          )
        })
        }
        </Col>
        <Col md={4}>
          <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
            Could not find answer here?
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
        
        <Link to={{ 
          pathname: `/askaquestion`
      }}>
        <Button variant="contained" color="primary" className={classes.marginTopButton}>
              Ask question
        </Button>
        </Link>
        </div>
      </CardContent>
    </Card>
        </Col>
        </Row>
        </Container>
        </div>
    }</div>
        )
    }

}
export default withStyles(styles)(FAQ);