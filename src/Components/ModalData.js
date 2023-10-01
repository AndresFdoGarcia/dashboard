import React from "react";
import { ModalContext } from "../Context/ModalContext";

function ModalData(){

    const {isModalVisible, closeModal, modalData} = React.useContext(ModalContext);    

    return isModalVisible ? (
        <div className="overlay">
          <div className="Modalcontainer">
          <header><strong>Nueva tarea pendiente</strong></header>
            <h1>Información básica de la tarea</h1>           
            {console.log('estoy aqui')}
            {console.log(modalData)}
            <button className='closer'onClick={closeModal}>X</button>
            <div className="formito">
                <label htmlFor='title'>Tarea</label>            
                <input type="text" name="title" value={modalData.title} readOnly={true}></input>
                <label htmlFor='person'>Persona a cargo</label>
                <input type='text' value={modalData.author} readOnly={true}></input>
                <label htmlFor='description'>Descripción de la tarea</label>
                <textarea type='text' value={modalData.description} readOnly={true}></textarea>
                <label htmlFor='date'>Fecha límite</label> 
                <input type='date'value={modalData.date} readOnly={true}></input>
            </div>                
          </div>
        </div>
    ) : null;
}

export {ModalData};