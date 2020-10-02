import React from 'react'
import {Button, Input} from 'reactstrap'

class Dropdown extends React.Component {
    state = { 
        selectedState: null
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
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
            <Button color="primary">Go</Button>
            <h3>{this.state.selectedState ? this.state.selectedState : 'blank'}</h3>
            <p>Resource Page: <a href="/">{this.state.selectedState}</a></p>
            <p>Twitter: <a href="/">{this.state.selectedState}</a></p>
            <p># of cases: <a href="/">{this.state.selectedState}</a></p>
        </> );
    }
}
 
export default Dropdown;