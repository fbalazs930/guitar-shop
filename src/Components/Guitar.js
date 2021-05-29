import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Guitar(props) {
    window.scrollTo(0, 0);
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
                        {props.location.state.images[0].map(img=>(
                                <img key={img} src={img} alt="" />
                            ))}
                    </ScrollContainer>  
                    <div></div>  
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
