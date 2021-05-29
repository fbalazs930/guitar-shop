import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import featuredGuitarData from './FeaturedGuitarsData';
import { Link } from 'react-router-dom';

export default function Featured() {
    return (
        <div className='featured'>
            <h2><span>Kiemelt termékeink</span></h2>
            <ScrollContainer className='images' hideScrollbars='false'>
                {featuredGuitarData.map(fGuitar => (
                    <Link key={fGuitar.id}
                    to={{
                        pathname:`/guitar/${fGuitar.sName}`,
                        state:{
                            name:fGuitar.lName,
                            cost:fGuitar.cost,
                            lImgSrc:fGuitar.lImgSrc,
                            images:fGuitar.images
                        }
                    }} className='img'>
                        <img src={fGuitar.sImgSrc} alt="" />
                        <p>{fGuitar.sName}</p>
                    </Link>
                ))}
            </ScrollContainer>
        </div>
    )
}
