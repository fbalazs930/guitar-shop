import React, { useState } from 'react'

export default function FullScreenImage(props) {
    const[clicc,setClicc]=useState(props.click);
    setClicc(props.click);
    return (
        <div>     
            {clicc ? 
            <div>
                <div className="exit">
                <i onClick={()=>{setClicc(false)}} className="fas fa-times-circle"></i>
                </div>
                <img src={props.src} alt="" />
            </div>    
            :
            <></> 
            }
        </div>
    )
}
