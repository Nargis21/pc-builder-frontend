import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[100vh] bg-gray-100'>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;