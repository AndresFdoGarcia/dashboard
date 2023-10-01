import React from 'react';
import { useState } from "react"

const ModalContext = React.createContext({});

function ModalContextProvider({children}){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        console.log("ayudaaaaaaaaaaaaaa")
        setModalData(data);
        console.log(data)
        setIsModalVisible(true);
        console.log(isModalVisible)
    };

    const closeModal = () => {
        setModalData(null);
        setIsModalVisible(false);
    };

    return (
        <ModalContext.Provider value={{isModalVisible, openModal, closeModal, modalData}}>
          {children}
        </ModalContext.Provider>
      );
}

export {ModalContext,ModalContextProvider};

