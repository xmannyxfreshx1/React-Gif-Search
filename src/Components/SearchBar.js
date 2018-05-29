import React, { Component } from 'react';

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
            <input type ="text" onChange={this.onChange}/>
            <button onClick={this.onSearch}>SEARCH</button>
        </div>);
    }


}

export default SearchBar;