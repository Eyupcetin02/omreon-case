import React from 'react';
import Navbar from './components/Navbar';
import "./age.css"
import Sidebar from './components/Sidebar';
import Contents from './components/Contents';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const {modal} = useSelector(state => state.modal)

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            {modal && <Modal/>}
            <Contents/>
        </div>
    );
}

export default HomePage;
