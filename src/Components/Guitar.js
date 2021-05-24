import React from 'react';

export default function Guitar(props) {
    return (
        <div className='guitar-specs'>
            <h1>{props.location.params.name}</h1>
        </div>
    )
}
