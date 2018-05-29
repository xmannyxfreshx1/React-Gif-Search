import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import GifList from './Components/GifList';
import logo from './logo.svg';
import './App.css';
/*
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


}*/

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            gifs:[]
        };
        this.search = this.search.bind(this);
    }
    componentDidMount(){
        this.search();
    }

    search(searchTerm = "ryan+gosling"){
        this.setState({
            isLoading:true,
            gifs:[]
        });
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Uf79tU9Kkwmo04uGjSj0sv76kyJVeBqv&limit=10`)
            .then(res => res.json())
            .then(
                (result)=>{
                    setTimeout(()=>this.setState({
                        isLoading:false,
                        gifs:result.data
                    }),2000);
                },
                (error) =>{
                    this.setState({
                        isLoading:false,
                        error
                    });
                }
            )
    }




    renderGifs(){
        return this.state.gifs.map((gifs) => <div><img src={gifs.images.downsized.url}/></div>)
    }

    renderLoading(){
        if(this.state.isLoading){
            return <div>Loading...</div>
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">React Gif Engine</h1>
        </header>
          <SearchBar onClick={term=>this.search(term)}/>
          <GifList gifs={this.state.gifs}/>
          {this.renderLoading()}
          {/*{this.state.gifs && this.renderGifs()}*/}
      </div>
    );
  }
}

export default App;

