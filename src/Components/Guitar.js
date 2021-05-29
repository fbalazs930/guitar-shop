import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Guitar(props) {
    window.scrollTo(0, 0);
    const[click,setClick]=useState(false);
    const[src,setSrc]=useState('');
    const[id,setId]=useState(0);
    
    useEffect(() => {
        window.addEventListener('keyup',(e)=>{
            if(e.keyCode===27){
                setClick(false);
                return window.removeEventListener('keyup',()=>{});
            }
            return window.removeEventListener('keyup',()=>{});
        }); 
        window.addEventListener('keyup',(e)=>{
            if(e.keyCode===37){
                if(id-1>=0){
                    setId(id-1)
                    return window.removeEventListener('keyup',()=>{});
                }
            }
            if(e.keyCode===39){
                if(parseInt(id)+1<=props.location.state.images.length-1){
                    setId(parseInt(id)+1)
                    return window.removeEventListener('keyup',()=>{});
                }
            }
            return window.removeEventListener('keyup',()=>{});
        }); 
        return window.removeEventListener('keyup',()=>{});
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
                            <img onClick={()=>{setClick(true); setSrc(img.src); setId(img.imgId)}} key={img.imgId} src={img.src} alt=""/>
                        ))}
                    </ScrollContainer>  
                    <div></div>  
                </div>
                <div className="bottom">
                </div>
            </div>

            <div className="full-screen-image" style={click ? {display:'grid'} : {display:'none'}}>
                <div className="exit">
                    <i onClick={()=>{setClick(false)}} className="fas fa-times-circle"></i>
                </div>
                <div className="f-img">
                  <img src={props.location.state.images[id].src} alt="" />
                </div>
                <div className="arrows">
                    <i className="fas fa-arrow-alt-circle-left"
                        onClick={()=>{
                            if(id-1>=0){
                                setId(id-1)
                            }
                        }}></i>
                    <p>{id}</p>
                    <i className="fas fa-arrow-alt-circle-right"
                    onClick={()=>{
                        if(parseInt(id)+1<=props.location.state.images.length-1){
                            setId(parseInt(id)+1)
                        }
                        }}></i>
                </div>
            </div>
            
            
        </div>
    )
}
