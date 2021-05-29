import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Guitar(props) {
    window.scrollTo(0, 0);
    const[click,setClick]=useState(false);
    const[id,setId]=useState(0);
    window.addEventListener('keyup',(e)=>{
        if(e.keyCode===27){
            setClick(false);
        }
    });    
    useEffect(() => {        
        window.addEventListener('keyup',(e)=>{
            if(e.keyCode===37){
                setId(id - 1);
            }
            if(e.keyCode===39){
                setId(id + 1);
            }            
        });
        return window.addEventListener('keyup', () => {});
    }, [id])
    return (
        <div className='guitar-specs'>
            <div className="guitar-spec">
                <div className="top">
                    <div></div>
                    <div className='name-cost'>
                        <h1>{props.location.state.name}</h1>
                        <h2>{props.location.state.cost}</h2>
                    </div>
                    <div className="big-img">                        
                        <img src={props.location.state.lImgSrc} alt="" />
                    </div>
                    <ScrollContainer className='scrollSoctainer' hideScrollbars='false'>
                        {props.location.state.images.map(img=>(
                            <img onClick={()=>{setClick(true); setId(img.imgId)}} key={img.imgId} src={img.src} alt=""/>
                        ))}
                    </ScrollContainer>  
                    <div></div>  
                </div>
                <div className="bottom">
                </div>
            </div>
            <div className="full-screen-image" style={click ? {display:'grid'} : {display:'none'}}>
                <div className="exit">
                    <i onClick={(e)=>{setClick(false)}}
                    className="fas fa-times-circle"></i>
                </div>
                <img className="f-img" src={props.location.state.images[id].src} alt="" />
                <div className="arrows">
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    {id}
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </div>
    )
}
