// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import React, { Component } from 'react';

import { 
                                Gallery,
                                ImageGalleryItem,
                                ImageGalleryItemImage    
 } from './ImageGallery.styled';

 import { Modal } from '../Modal/Modal';

export class ImageGallery extends Component{
    state = {
        showModal: false,
        bigUrl: '1',
    };

    getImage = e => {
    this.setState(
        { bigUrl: e.target.dataset.largeimg },
        () => console.log(this.state.bigUrl)
    );
    this.toggleModal();
    };

    toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal,}),
    ()=>console.log('showModal:', this.state.showModal)
    
        )
    };

    render(){
        const { arr } = this.props;
    return (
        <>
            <Gallery>
                { 
                arr.map(itm=>(
        <ImageGalleryItem  key={itm.id}>
            <ImageGalleryItemImage
                data-largeimg = {itm.largeImageURL}
                src={itm.webformatURL}
                alt={itm.name.split(', ')[0]}
                onClick={this.getImage}
                />  
                console.log(itm.largeImageURL);
                          
        </ImageGalleryItem >
                ))
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