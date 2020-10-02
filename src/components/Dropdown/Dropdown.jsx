import React from 'react'
import {Button, Input, Card, CardTitle, CardText} from 'reactstrap'
import userService from '../../services/userService'
import { Link } from 'react-router-dom'


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

    handleAddFav = () => {
        userService.addFavState(this.props.id, this.state.selectedState)
    }

    render() { 
        return ( 
        <>
        <div style={{width:'100%', margin: '5em'}}>
            <div style={{textAlign:'left'}}>
            <h1>Safely</h1>
            <h1>Social</h1>
            </div>
            <Input onChange={this.handleChange} type="select" name="selectedState" style={{width: '90%', margin:'1em'}}>
                <option selected disabled></option>
                {this.props.resources?.map(({name}) => (<option key={name} value={name}>{name}</option>))}
            </Input>
            {this.state.selectedState ? 
            <>
            <h1>{this.state.selectedState}</h1>
            <main className='links-centered'>
                <div id='link-container'>
                {this.state.stats ? <a href={`${this.state.stats}`} target='_blank'>Stats</a> : 'Stats'}
                </div>
                <div id='link-container'>
                {this.state.resourceLink ? <a href={`${this.state.resourceLink}`} target='_blank'>Resources</a> : 'Resources'}
                </div>
                <div id='link-container'>
                {this.state.twitter ? <a href={`https://twitter.com/${this.state.twitter}`} target='_blank'>Twitter</a> : 'Twitter'}
                
                </div>
                <div>
                {this.state.selectedState ? <button id='link-container' onClick={this.handleAddFav}>Add as Favorite</button> : ''}

                </div>
            </main>
            </>
            : ''}
            
            </div>
            
            {this.props.resources && this.props.stats && this.props.userData ? this.props.userData.favState.map(state => (
                
            <Card body className="text-center">
            <CardTitle>{state}</CardTitle>
            <a href={this.handleGetData(state)[2]} target= '_blank'>Stats</a>
            <a href={`https://twitter.com/${this.handleGetData(state)[1]}`} target='_blank'>Twitter</a>
            <Button><a href={this.handleGetData(state)[0]} target= '_blank'>Go to Resource</a></Button>
            </Card>

            ))
            :
            'Loading ...'
            }
        </>
        );
    }
}
 
export default Dropdown;