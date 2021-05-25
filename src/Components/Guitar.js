import React from 'react';

export default function Guitar(props) {
    window.scrollTo(0, 0);
    return (
        <div className='guitar-specs'>
            <div className="guitar-spec">
                <div className="top">
                    <div>
                        <h1>{props.location.state.name}</h1>
                        <h2>{props.location.state.cost}</h2>
                    </div>
                    <img src={props.location.state.lImgSrc} alt="" />
                    <div className="guitar-images">
                        {props.location.state.images[0].map(img=>(
                            <img key={img} src={img} alt="" />
                        ))}
                    </div>
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
