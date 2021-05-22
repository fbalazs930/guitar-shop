import React from 'react';
import Featured from './Featured';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <div className='bg'>
            </div>
            <div className='home'>
                <i className="fas fa-mouse"></i>
            </div>            
            <Featured className='featured'/>
            <Footer/>
        </>
    )
}
