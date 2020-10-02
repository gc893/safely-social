import React, { Component } from 'react'
import ProfileComp from '../../components/ProfileComp/ProfileComp'
import userService from "../../services/userService";


class Profile extends Component {
    state = {}

     async componentDidMount(){
        const userData = await userService.getOne()
        this.setState({userData})
      }

     
    render() { 
        
        return ( 
            <>
            <ProfileComp 
            userData={this.props.userData}
            />
            </>
         );
    }
}
 
export default Profile;