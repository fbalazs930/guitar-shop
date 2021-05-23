import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import guitarData from './GuitarData';
import Guitar from './Guitar';

export default function Guitars() {
    return (
        <div className='guitars'>
            <div className="bg"></div>  
            <div className="guitars-container">    
                    {guitarData.map(guitar=>(
                        <Link to='/guitar' key={guitar.id}>
                            <div className="guitar">
                            <div className="img">
                                <img src={guitar.sImgSrc} alt="" />
                            </div>
                            <div className="name">{guitar.sName}</div>
                            </div> 
                        </Link>  
                    ))}           
            </div>  
                    
            <Route path='/guitar' component={Guitar}/>             
        </div>        
    )
}
