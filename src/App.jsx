import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Oval } from 'react-loader-spinner'

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

import { Searchbar  } from "./components/Searchbar/Searchbar";
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Loader } from './components/Loader/Loader';
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
          page: 1,
          spinner: false,
          total: null
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
            
          const { hits, total } = response.data;
          console.log(hits, total);
          // console.log(hits[0].webformatURL);

          console.log('TOTAL FROM API:', total);
          console.log('HITS FROM API:', hits);

          this.setState(prevState => ({
          img: [...prevState.img, ...hits],
          spinner: false,
          total
    }),
    () => console.log('total:', this.state.total)
  );
     
        });
      }
 
    catch(error){
    console.log(error);
    this.setState({ spinner: false })
    }
}


handleSearch = search =>{
    this.setState({
       search,
       img: [],
       page: 1,
       spinner: true, 
       total: 1,
      })
}

render(){
  return (
            <div>
                  <Searchbar handleSearch = {this.handleSearch}/>
                  {/* React homework template */}
                  {/* <img src={this.state.img} width="200" alt="cat" /> */}
                  {/* {console.log(this.state.img)} */}
                  {  this.state.spinner && <Loader/>
                    // <div className={css.spinner}> 
                    //         <Oval
                    //             height={60}
                    //             width={60}
                    //             color="#d6d6d6"
                    //             visible={true}
                    //             ariaLabel="oval-loading"
                    //             secondaryColor="#8a8a8a"
                    //             strokeWidth={8}
                    //             strokeWidthSecondary={7}
                    //         />
                    // </div>
                          }
                  {!!this.state.img.length && 
                    <ImageGallery 
                      arr={this.state.img}
                      toPlusOne={this.toPlusOne}
                    />
                  }

                  {
                  (this.state.total === 0) &&
                  <ErrorMessage>This is ErrorMessage</ErrorMessage>
                  }

                  
            </div>
          );
      }
}

//  No Prop Types needed here
//  App.propTypes = {
//   arr: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       total: PropTypes.number.isRequired,
//     })

//   )
// }