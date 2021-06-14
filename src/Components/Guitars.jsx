import React from 'react';
import guitarData from './GuitarData.jsx';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Guitars = () => {
    return (
        <div className='guitars'>
            <div className="bg"></div>
            <div className="guitars-container">
                {guitarData.map(guitar => (
                    guitar.isFeatured || <Link key={guitar.id}
                        to={{
                            pathname: `/guitar/${guitar.slug}`
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
        </div>
    )
}
export default Guitars;
