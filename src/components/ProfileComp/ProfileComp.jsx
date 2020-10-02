import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'


class ProfileComp extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <div>
            {this.props.userData ?
              <Jumbotron userData={this.props.userData}>
                <div>
                    
                {this.props.userData.avatar}
                </div>
        
                <h1 className="display-3">Hello, {this.props.userData.name} </h1> 
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                
                
                
                
                
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
                : 'Loading ...'}
            </div>
         );
    }
}
 
export default ProfileComp;