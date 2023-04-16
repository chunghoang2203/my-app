import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
                <div className='main'>{children}</div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;