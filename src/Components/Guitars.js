import React from 'react'
import guitarData from './GuitarData';

export default function Guitars() {
    return (
        <div className='guitars'>
            <div className="bg"></div>
            <div className="guitars-container">
                {guitarData.map(guitar=>(
                    <div className="guitar">
                        <div className="img">
                            <img src={guitar.sImgSrc} alt="" />
                        </div>
                        <div className="name">{guitar.sName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
