import React, { useState, useContext } from 'react'

const AppContext = React.createContext();
const AppProvider = ({children}) => {

const [isSideBarOpen, setIsSideBarOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

const openSideBar = () => {
    setIsSideBarOpen(true);
}
const closeSideBar = () => {
    setIsSideBarOpen(false);
}
const openModal = () => {
    setIsModalOpen(true);
}
const closeModal = () => {
    setIsModalOpen(false);
}

    return (
    <AppContext.Provider 
    value={{
        isSideBarOpen, 
        openSideBar, 
        closeSideBar, 
        isModalOpen, 
        openModal, 
        closeModal,
    }}
    >
        {children}
        </AppContext.Provider>
    );
};

// custom hook helps not to use as many imports of useContext
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}