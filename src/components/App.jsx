import { Searchbar  } from "./Searchbar/Searchbar";
// import css from './App.module.css';
import axios from 'axios';
import React, { Component } from 'react';

const key = '51186890-e1c8ef6e5ef4b08950db17a2f';
const BASE_URL = 'https://pixabay.com/api/';
// const cat = 'cat';
const hor = 'horizontall';
export class App extends Component{

  state ={
    img: null,
    search: '',
  }
  
  componentDidMount(){
    const item = 'sun';
    const onePage = 1;
    this.getAPIdata(onePage, item);
  }

   componentDidUpdate(prevProps, prevState){

     if(prevState.search!== this.state.search){
        const item = this.state.search;
        const onePage = 1;
        this.getAPIdata( onePage, item);
     }
    }
 async getAPIdata(onePage, item){
    try{
  await axios.get( `${BASE_URL}?q=${item}&key=${key}&image_type=photo&orientation=${hor}&page=${onePage}&per_page=12`)
        .then(response => {
            console.log(response.data)
            
           const { hits } = response.data;
           console.log(hits[0].webformatURL);
           this.setState({img: hits[0].webformatURL})
     
        });
      }
 
    catch(error){
    console.log(error);
    }
}


  handleSearch = (search) =>{
        this.setState({ search })
    }

render(){

  
  return (
    <div
      // className={css.app}
    >
      <Searchbar handleSearch = {this.handleSearch}/>
      React homework template
      <img src={this.state.img} width="200" alt="cat" />
    </div>
  );

}

}
