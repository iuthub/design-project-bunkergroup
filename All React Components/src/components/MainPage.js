import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import { Link } from "react-router-dom";
// import App from "../App";

const styles = theme => ({
    root: {
        marginTop: "2px",
        ...theme.mixins.gutters(),
      },
    grow: {
        flexGrow: 1,
        marginBottom: "15px",
      },
  card: {
    marginTop: '50px',
  },
  card2: {
    marginTop: '50px',
    marginBottom: '30px',
  },

    });

class MainPage extends Component {

    render(){
        const { classes } = this.props;

        return(
            
                  <div className="container">
                  <div className="row">    
                  <div className="col-md-4">
                  <Card className={classes.card}>
              <CardContent>
              <div className="mainBoxNotice">
              <p class="title">Academic Administration</p>
              <ul>
  
                          <li> 
  
                          <strong>Muzaffar Djalalov</strong> - Acting Rector
  
                          </li>
                          <li>
                          <strong>Woo Sug Cho</strong> - First Vice-Rector
                          </li>
                          <li> 
  
                          <strong>Turdimurat Tursunmuratov</strong> - Vice-rector for spiritual and educational work
  
                          </li>
                          <li> 
  
                          <strong>Hilola Umarova</strong> - General Manager
  
                          </li>
                          <li> 
  
                          <strong>Kim Chang Yong</strong> - Head of division, Academic affairs and admissions
  
                          </li>
                          <li> 
  
                          <strong>Miryakub Mirzakhmedov</strong> - Head of division, Partnership development and sponsorship attraction
  
                          </li>
                          <li> 
  
                          <strong>Zoxir Mirzayev</strong> - Head of Department, Information and Communications
  
                          </li>
                          
                          <li> 
  
                          <strong>Rustam Kazakov</strong> - Head of Finance team, Accounting Department
  
  
                          </li>	
              </ul>
              </div>
                
              </CardContent>
            </Card>
            </div>
                  <div className="col-md-4">
                <Card className={classes.card}>
            <CardContent>
              
              <div className="mainBoxCalendar">
              <p class="title">Academic Calendar</p>

              <ul>
            

			<li>
                    
					<span>
                    28/01 ~ 17/05
                    </span>
                    Spring Semester
			</li>
		
			<li>
				
					<span>
                    11/03 ~ 15/03
					</span>
                    Lecture Survey
				
			</li>
		
			<li>
				
					<span>
                    25/03 ~ 29/03
					</span>
                    Mid-term Examinaton

				
			</li>
		
			<li>
				
					<span>
                    13/05 ~ 17/05
					</span>
                    Final Examination
			</li>
		
			<li>
				
					<span>
                    20/05 ~ 24/05
					</span>
                    Final Course Score
			</li>
		
			<li>
				
					<span>
                    20/05 ~ 06/09
					</span>
                    Summer Vacation
				
			</li>
		



</ul>
</div>
            </CardContent>
          </Card>
          </div>
          <div className="col-md-4">
          <Card className={classes.card2}>
      <CardContent>
      <div className="mainBoxLink">
      <p class="title">External Links</p>
      <ul class="list-item">
                    	<li><a href="https://inha.uz/en/" target="_blank">Inha University in Tashkent</a></li>
                        <li><a href="http://eclass.inha.uz/" target="_blank">eClass</a></li>                        
                        <li><a href="http://ins.inha.uz/" target="_blank">IUT Portal System</a></li>
                        <li><a href="https://mail.inha.uz/" target="_blank">IUT Mail</a></li>
                        <li><a href="https://t.me/studentsinha/" target="_blank">IUT Student Affairs</a></li>
                    </ul>
      </div>
        
      </CardContent>
    </Card>
    </div>
                
          </div>
          </div>
        
        );
    }
}
MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainPage);