import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../assets/Compnents/MainComponents/Navbar';

const MainLayout = () => {
    return (
        <div >
            <div className='fixed left-0 right-0 z-20'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;