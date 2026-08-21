// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import PropTypes from 'prop-types';

import React, { Component } from 'react';

import { 
                                Gallery,
                                ImageGalleryItem,
                                ImageGalleryItemImage,
                                Button    
        }   from './ImageGallery.styled';

 import { Modal } from '../Modal/Modal';

export class ImageGallery extends Component{
    state = {
        showModal: false,
        bigUrl: '1',
    };

    getImage = e => {
    this.setState(
        { bigUrl: e.target.dataset.largeimg },
        () =>{
                console.log(this.state.bigUrl)
                this.toggleModal()
        }
        
    );
    
    };

    toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal,}),
    ()=>console.log('showModal:', this.state.showModal)
    
        )
    };

    render(){
        const { arr, toPlusOne } = this.props;
    return (
        <>
            <Gallery>
                { 
                arr.map(itm=>(
        <ImageGalleryItem  key = {itm.id}>

                                            <ImageGalleryItemImage
                                                data-largeimg = {itm.largeImageURL}
                                                src={itm.webformatURL}
                                                alt={itm.name.split(', ')[0]}
                                                onClick={this.getImage}
                                            />  
               
        </ImageGalleryItem >
        
                ))
                }
            {console.log('length',arr.length)} 
            {
            arr.length < 504 && <Button onClick={toPlusOne}>Next</Button>
            }
            </Gallery>

            {this.state.showModal && <Modal 
            big={this.state.bigUrl}
            toClose={this.toggleModal}
            />
            }    
        </>
    )
}
}

ImageGallery.propTypes = {
    arr: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    toPlusOne: PropTypes.func.isRequired,
}