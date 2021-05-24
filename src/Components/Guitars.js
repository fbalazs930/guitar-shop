import React from 'react'
import { Link } from 'react-router-dom';
import guitarData from './GuitarData';

export default function Guitars() {
    return (        
        <div className='guitars'>
            <div className="bg"></div>
            <div className="guitars-container">    
                {guitarData.map(guitar=>(
                    <Link key={guitar.id}
                    to={{
                        pathname:'/guitar',
                        params:{
                            name:guitar.lName
                        }
                    }}
                    >
                        <div className="guitar">
                        <div className="img">
                            <img src={guitar.sImgSrc} alt="" />
                        </div>
                        <div className="name">{guitar.sName}</div>
                        </div> 
                    </Link>  
                ))}         
            </div>
        </div>  
    )
}
