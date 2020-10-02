import React from 'react'
import {Button, Input} from 'reactstrap'

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
                console.log(stateCode)
                this.setState({
                    resourceLink: element.covid19Site,
                    twitter: element.twitter
                  });
            }
        });
        this.props.stats.forEach(element => {
            if(element.state === stateCode){
                this.setState({
                    stats: element.positive
                  });
            }
        });
      };

    handleSubmit() {

    }

    render() { 
        return ( 
        <>
            <h1>Select a state!</h1>
            <Input onChange={this.handleChange} type="select" name="selectedState" style={{width: '50vmin', margin:'1em'}}>
                <option selected disabled></option>
                {this.props.resources?.map(({name}) => (<option key={name} value={name}>{name}</option>))}
            </Input>
            {/* <Button onClick={this.handleSubmit} color="primary">Go</Button> */}
            <h3>{this.state.selectedState ? `State: ${this.state.selectedState}` : 'State: '}</h3>
            <main className='links-centered'>
                <div id='link-container'>
                {this.state.stats ? `${this.state.stats} cases` : 'Stats'}
                </div>
                <div id='link-container'>
                {this.state.resourceLink ? <a href={`${this.state.resourceLink}`} target='_blank'>Resources</a> : 'Resources'}
                </div>
                <div id='link-container'>
                {this.state.twitter ? <a href={`https://twitter.com/${this.state.twitter}`} target='_blank'>Twitter</a> : 'Twitter'}
                
                </div>
            </main>
        </> );
    }
}
 
export default Dropdown;