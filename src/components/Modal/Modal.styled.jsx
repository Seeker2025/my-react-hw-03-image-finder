import styled from 'styled-components';
import closeIcon from '../../close.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWin = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: absolute;
`;

export const Button = styled.button`

  width: 40px;
  height: 40px;
  border-radius: 50%;

  position: fixed;
  top: 2vh;
  right: 2vw;
  
  background-color: #bababa;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center;
  border: 0;

`;