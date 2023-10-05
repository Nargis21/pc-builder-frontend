import React from 'react';
import Navbar from '../Shared/Navbar';

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[100vh]'>
                {children}
            </div>
            <h1>footer</h1>
        </div>
    );
};

export default RootLayout;