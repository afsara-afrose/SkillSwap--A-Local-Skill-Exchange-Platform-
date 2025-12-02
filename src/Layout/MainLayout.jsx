import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
       <>
        <div className='bg-amber-50 flex flex-col min-h-screen'>
            <header className=' '>
            <Navbar></Navbar>
        </header>
        
        <main className=' flex-1'>
            <Outlet></Outlet>
        </main>

        <section>
            <Footer></Footer>
        </section>
        </div>
       </>
    );
};

export default MainLayout;