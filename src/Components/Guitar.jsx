/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import guitarData from './GuitarData.jsx';
import { useParams } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Guitar = () => {
    window.scrollTo(0, 0);
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [lImg, setLImg] = useState('');
    const [images, setImages] = useState([{}]);
    const slug = useParams('slug');
    useEffect(() => {
        const guitar = guitarData.find((item) => item.slug === slug.slug);
        if (guitar) {
            setName(guitar.lName);
            setCost(guitar.cost);
            setLImg(guitar.lImgSrc);
            setImages(guitar.images);
        }
    }, []);
    const [click, setClick] = useState(false);
    const [id, setId] = useState(0);
    const updateId = e => {
        if (e.keyCode === 27) { setClick(false); }
        if (e.keyCode === 37) { if (id - 1 >= 0) { setId(id - 1) } }
        if (e.keyCode === 39) {
            if (parseInt(id) + 1 <= images.length - 1) {
                setId(parseInt(id) + 1);
            }
        }
    }
    useEffect(() => {
        window.addEventListener('keyup', updateId);
        return () => { window.removeEventListener('keyup', updateId); }
    }, [id])
    return (
        <div className='guitar-specs'>
            <div className="guitar-spec">
                <div className="top">
                    <div></div>
                    <div className='name-cost'>
                        <h1>{name}</h1>
                        <h2>{cost}</h2>
                    </div>
                    <div className="big-img">
                        <LazyLoadImage
                            alt={slug.slug}
                            src={lImg}
                        />
                    </div>
                    <ScrollContainer className='scrollContainer' hideScrollbars='false'>
                        {images.map(img => (
                            <LazyLoadImage key={parseInt(img.imgId)} onClick={() => { setClick(true); setId(img.imgId) }}
                                alt={slug.slug}
                                src={img.src}
                            />
                        ))}
                    </ScrollContainer>
                    <div></div>
                </div>
                <div className="bottom">
                </div>
            </div>
            <div className="full-screen-image" style={click ? { display: 'grid' } : { display: 'none' }}>
                <div className="exit">
                    <i onClick={() => { setClick(false) }} className="fas fa-times-circle">
                    </i>
                </div>
                <div className="f-img">
                    <img src={images[id].src} alt={slug.slug} />
                </div>
                <div className="arrows">
                    <i className="fas fa-arrow-alt-circle-left"
                        onClick={() => {
                            if (id - 1 >= 0) { setId(id - 1) }
                        }}></i>
                    <i className="fas fa-arrow-alt-circle-right"
                        onClick={() => {
                            if (parseInt(id) + 1 <= images.length - 1) { setId(parseInt(id) + 1) }
                        }}></i>
                </div>
            </div>
        </div>
    )
}

export default Guitar;