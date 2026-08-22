import React, { Component } from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalWin, Button } from "./Modal.styled";
// import closeIcon from '../../search.png';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component{
    state = {

    };

componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = e =>{
    if(e.key === 'Escape') this.props.toClose();
}
    
    render(){

        const { big=2, toClose=3 } = this.props;
        return createPortal(
            <Overlay onClick ={ toClose }>
                <ModalWin onClick={e => e.stopPropagation()}>
                    <img src={big} alt="" />

                        <Button onClick ={ toClose }></Button>
                        
                </ModalWin>
               
            </Overlay>,
            modalRoot,
            
        )
    }
} 

Modal.propTypes = {
    toClose: PropTypes.func.isRequired,
    big: PropTypes.string.isRequired,
};