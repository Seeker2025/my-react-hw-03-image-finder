import React, { Component } from "react";
import { createPortal } from 'react-dom';
import { Overlay } from "./Modal.styled";
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component{
    state = {

    };

    

    render(){

        const { big, toClose} = this.props;
        return createPortal(
            <Overlay>
                <Modal>
                    <img src={big} alt="" />
                </Modal>
                <button onClick ={ toClose }>X</button>
            </Overlay>,
            modalRoot,
            
        )
    }
} 