import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
       <>
        <header>
            <Navbar></Navbar>
        </header>
        
        <main>
            <Outlet></Outlet>
        </main>
       </>
    );
};

export default MainLayout;