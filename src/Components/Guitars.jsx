import React, { useState } from 'react';
import guitarData from './GuitarData.jsx';
import Paginator from './Paginator.jsx';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Guitars = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [guitarsPerPage] = useState(9);

    const lastGuitar = currentPage * guitarsPerPage;
    const firstGuitar = lastGuitar - guitarsPerPage;
    const currentGuitars = guitarData.slice(firstGuitar, lastGuitar);

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };
    return (
        <div className='guitars'>
            <div className="bg"></div>
            <div className="guitars-container">
                {currentGuitars.map(guitar => (
                    <Link key={guitar.id}
                        to={{
                            pathname: `/${guitar.slug}`
                        }}
                    >
                        <div className="guitar">
                            <div className="img">
                                <LazyLoadImage
                                    alt={guitar.slug}
                                    src={guitar.sImgSrc}
                                />
                            </div>
                            <div className="name">{guitar.sName}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <Paginator guitarsPerPage={guitarsPerPage} totalGuitars={guitarData.length} paginate={paginate} />
        </div>
    )
}
export default Guitars;
