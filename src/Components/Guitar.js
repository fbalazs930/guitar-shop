import React from 'react';

export default function Guitar(props) {
    window.scrollTo(0, 0);
    return (
        <div className='guitar-specs'>
            <div className="guitar-spec">
                <div className="top">
                    <h1>{props.location.state.name}</h1>
                    <h3>{props.location.state.cost}</h3>
                    <img src={props.location.state.lImgSrc} alt="" />
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
