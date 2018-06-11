import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state ={
            searchTerm: null
        };
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSearch(){
        console.log(this.state.searchTerm);
        console.log(this.props);
        this.props.onClick(this.state.searchTerm)
    }

    onChange(term){
        this.setState({
            searchTerm:term.target.value
        });
    }

    render(){
        return(<div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header className="App-header">
                    <Navbar.Brand>
                        <a href="#home">React Gif Engine</a>
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        {/*<h1 className="App-title">React Gif Engine</h1>*/}
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" onChange={this.onChange} placeholder="Search" />
                    </FormGroup>{' '}
                    <Button bsStyle="danger" onClick={this.onSearch}>Submit</Button>
                </Navbar.Form>
            </Navbar>
            {/*<input type ="text" onChange={this.onChange}/>*/}
            {/*<button onClick={this.onSearch}>SEARCH</button>*/}
        </div>);
    }


}

export default SearchBar;