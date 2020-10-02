import React, { Component } from 'react'
import ProfileComp from '../../components/ProfileComp/ProfileComp'
import userService from "../../services/userService";


class Profile extends Component {
    state = { 
       
     }

     async componentDidMount(){
        const userData = await userService.getOne()
        this.setState({userData})
      }

     
    render() { 
        const {userData} = this.state;
        return ( 
            <>
            <ProfileComp 
            userData={userData}
            />
            </>
         );
    }
}
 
export default Profile;