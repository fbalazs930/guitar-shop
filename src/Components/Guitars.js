import React, { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import guitarData from './GuitarData';
import Guitar from './Guitar';

export default function Guitars() {
    const[click,setClick]=useState(false);  
    const hide ={
        display:'none'
    };  
    const show ={
        display:'block'
    };  
    useEffect(() => {
        window.onpopstate = () => {
            setClick(false);
        }
    },[]);
    return (
        
            <div className='guitars'>
            <div className="bg"></div>
            <div className="guitars-container">    
                    {guitarData.map(guitar=>(
                        <Link to='/guitar' key={guitar.id} onClick={()=>{
                            setClick(true);
                        }}>
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
