import React from 'react';
import guitarData from './GuitarData.jsx';
import { Link } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

const Featured = () => {
    return (
        <div className='featured'>
            <h2><span>Kiemelt termékeink</span></h2>
            <ScrollContainer className='images' hideScrollbars='false'>
                {guitarData.map(guitar => (
                    guitar.isFeatured && <Link key={guitar.id}
                    to={{
                        pathname: `/${guitar.slug}`
                    }} className='img'>
                    <img src={guitar.sImgSrc} alt={guitar.slug} />
                    <p>{guitar.sName}</p>
                </Link>
                ))}
            </ScrollContainer>
        </div>
    )
}

export default Featured;