import React from 'react'
import {Button, Input, Card, CardTitle, CardText} from 'reactstrap'
import userService from '../../services/userService'
import './Dropdown.css'



class Dropdown extends React.Component {
    state = { 
        selectedState: null,
        stats: null,
        resourceLink: null,
        twitter: null
    }

    handleChange = (e) => {
        let stateCode = null
        this.setState({
          [e.target.name]: e.target.value,
        });
        this.props.resources.forEach(element => {
            if(element.name === e.target.value) {
                stateCode = element.state
                this.setState({
                    resourceLink: element.covid19Site,
                    twitter: element.twitter,
                    stats: element.covid19SiteTertiary
                  });
            }
        });
        // this.props.stats.forEach(element => {
        //     if(element.state === stateCode){
        //         this.setState({
        //             stats: element.positive
        //           });
        //     }
        // });
      };

    handleGetData(state) {
        let stateCode = null
        let resource = null
        let twitter = null
        let stats = null
        this.props.resources.forEach(element => {
            if(element.name === state) {
                stateCode = element.state
                resource = element.covid19Site
                twitter = element.twitter
                stats = element.covid19SiteTertiary
            }
            
        });
        // this.props.stats.forEach(element => {
        //     if(element.state === stateCode){
        //         cases = element.positive
        //     }
        // });
        return([resource, twitter, stats])
    }

    handleAddFav = async () => {
        await userService.addFavState(this.props.id, this.state.selectedState)
    }

    render() { 
        return ( 
        <>
        <div style={{width:'100%', margin: '5em'}}>
            <div style={{textAlign:'left'}}>
            <h1>Safely</h1>
            <h1>Social</h1>
            </div>
            <Input id='stateInput' onChange={this.handleChange} type="select" name="selectedState" style={{width: '90%', margin:'1em'}}>
                <option selected disabled>Search by State</option>
                {this.props.resources?.map(({name}) => (<option key={name} value={name}>{name}</option>))}
            </Input>
            {this.state.selectedState ? 
            <>
            <h1 style={{margin: '2em'}}>{this.state.selectedState}</h1>
            <main className='links-centered'>
                <div id='link-container'>
                {this.state.stats ? <>
                    <img style={{display:'block'}} width='200px' src="https://i.imgur.com/nUSFdCX.png" alt=""/>
                    <a href={`${this.state.stats}`} target='_blank'>Stats</a> 
                </>: <img style={{display:'block'}} width='200px' src="https://i.imgur.com/nUSFdCX.png" alt=""/>}
                </div>
                <div id='link-container'>
                {this.state.resourceLink ? <>
                    <img style={{display:'block'}} width='200px' src="https://i.imgur.com/6cYdrUK.png" alt=""/>
                    <a href={`${this.state.resourceLink}`} target='_blank'>Resources</a> 
                </> : <img style={{display:'block'}} width='200px' src="https://i.imgur.com/6cYdrUK.png" alt=""/>}
                </div>
                <div id='link-container'>
                {this.state.twitter ? 
                <>
                    <img style={{display:'block'}} width='200px' src="https://i.imgur.com/Kxw0OV3.png" alt=""/>
                    <a href={`https://twitter.com/${this.state.twitter}`} target='_blank'>Twitter</a> 
                </>: <img style={{display:'block'}} width='200px' src="https://i.imgur.com/Kxw0OV3.png" alt=""/>}
                
                </div>
                
            </main>
            <div>
                {this.state.selectedState ? <button id='link-container' onClick={this.handleAddFav} style={{backgroundColor: '#ef8354', color:'white', border: 'none'}}>Add as Favorite</button> : ''}
            </div>
            </>
            : ''}
            
            </div>
            <div style={{width:'100%', textAlign:'left'}}>
                <h1 style={{margin: '1em'}}>Favorites</h1>
            </div>
            <div>
            {this.props.resources && this.props.stats && this.props.userData ? this.props.userData.favState.map(state => (
            <div style={{width:'100%', margin: '0 5em'}}>
                
                <Card body className="text-center" style={{maxWidth: '300px', margin:'1em'}}>
                
                <CardTitle><h3>{state}</h3></CardTitle>
                <a href={this.handleGetData(state)[2]} target= '_blank'>Stats</a>
                <a href={`https://twitter.com/${this.handleGetData(state)[1]}`} target='_blank'>Twitter</a>
                <Button style={{backgroundColor: '#ef8354', border: 'none'}}><a href={this.handleGetData(state)[0]} target= '_blank' style={{color:'white'}}>Go to Resource</a></Button>
                </Card>
            </div>
            ))
            
            :
            'Loading ...'
            }
            </div>
        </>
        );
    }
}
 
export default Dropdown;