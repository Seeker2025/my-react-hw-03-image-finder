import React, { Component } from 'react';

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

import { Searchbar  } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
// import css from './App.module.css';
import axios from 'axios';


const key = '51186890-e1c8ef6e5ef4b08950db17a2f';
const BASE_URL = 'https://pixabay.com/api/';
// const cat = 'cat';
const hor = 'horizontal';
export class App extends Component{

  state ={
          img: [],
          search: '',
          page: 1
  };
  
  // componentDidMount(){
  //   const item = 'sun';
  //   const onePage = 1;
  //   this.getAPIdata(onePage, item);
  // }

    toPlusOne = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
      }), () => console.log(this.state.page))
    }

  componentDidUpdate(prevProps, prevState){

    console.log(this.state.search);
    console.log(this.state.page);

     if(prevState.search !== this.state.search ||
        prevState.page !== this.state.page
      ){
        const item = this.state.search;
        const page = this.state.page;
        this.getAPIdata( page, item);
     }
    }

 async getAPIdata(onePage, item){
    try{
  await axios.get( `${BASE_URL}?q=${item}&key=${key}&image_type=photo&orientation=${hor}&page=${onePage}&per_page=12`)
        .then(response => {
           console.log(response.data)
            
          const { hits } = response.data;
          console.log(hits)
          console.log(hits[0].webformatURL);
          this.setState(prevState => ({
          img: [...prevState.img, ...hits]
    }));
     
        });
      }
 
    catch(error){
    console.log(error);
    }
}


handleSearch = search =>{
    this.setState({
       search,
       img: [],
       page: 1 
      })
}

render(){
  return (
            <div>
                  <Searchbar handleSearch = {this.handleSearch}/>
                  {/* React homework template */}
                  {/* <img src={this.state.img} width="200" alt="cat" /> */}
                  {/* {console.log(this.state.img)} */}
                  {this.state.img.length && 
                    <ImageGallery 
                      arr={this.state.img}
                      toPlusOne={this.toPlusOne}
                    />
                  }
            </div>
          );
      }
}
