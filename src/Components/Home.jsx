import React, { lazy, Suspense } from 'react';
const Featured = lazy(() => import('./Featured.jsx'));
const renderLoader = () => <p>Loading</p>;

const Home = () => {
    return (
        <Suspense fallback={renderLoader()}>
            <div className='home'>
                <div className="bg" />
                <Featured className='featured' />
            </div>
        </Suspense>
    )
}

export default Home;
