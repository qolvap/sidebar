import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {

  const {isModalOpen, closeModal} = useGlobalContext();

  return (
  <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container'>
      <p>The main aims of this exercise were to practice the useContext,  AppContext.Provider & the custom hook, which helps to import AppContext to each component less times. </p>
      <h3>To make it work please close this modal window & click the sidebar button</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes/>
      </button>
    </div>
    </div>
    );
};

export default Modal