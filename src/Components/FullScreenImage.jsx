import React, { useState } from 'react'

const FullScreenImage = (props) => {
    const [click, setClick] = useState(props.click);
    return (
        <div>
            {
                click &&
                <div>
                    <div className="exit">
                        <i onClick={() => { setClick(false) }} className="fas fa-times-circle"></i>
                    </div>
                    <img src={props.src} alt="" />
                </div>
            }
        </div>
    )
}

export default FullScreenImage;
