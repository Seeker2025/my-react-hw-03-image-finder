import React, { Component } from "react";
import { createPortal } from 'react-dom';
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

        const { big, toClose } = this.props;
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