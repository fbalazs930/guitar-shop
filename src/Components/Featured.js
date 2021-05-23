import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Featured() {
    return (
        <div className='featured'>
            <h2><span>Legújabb termékeink</span></h2>
            <ScrollContainer className='images' hideScrollbars='false'>
                <div className="img">
                    <img src="https://www.fmicassets.com/Damroot/JacksonVert/10001/2918809587_jac_ins_frt_01_rr.png" alt="" />
                    <p>JS SERIES DINKY™ ARCH TOP JS32Q DKA HT</p>
                </div>
                <div className="img">
                    <img src="https://www.fmicassets.com/Damroot/JacksonVert/10001/2916507557_gtr_frt_001_rr.png" alt="" />
                    <p>PRO SERIES SIGNATURE DAVE DAVIDSON WARRIOR™ WR7 MAH</p>
                </div>
                <div className="img">
                    <img src="https://www.fmicassets.com/Damroot/JacksonVert/10001/2916002576_gtr_frt_001_rr.png" alt="" />
                    <p>PRO SERIES SIGNATURE PHIL DEMMEL DEMMELITION FURY PDT</p>
                </div>
                <div className="img">
                    <img src="https://www.fmicassets.com/Damroot/JacksonVert/10001/2914332576_jac_ins_frt_01_rr.png" alt="" />
                    <p>PRO SERIES SOLOIST™ SL2A MAH</p>
                </div>
                <div className="img">
                    <img src="https://www.fmicassets.com/Damroot/JacksonVert/10001/2919904504_jac_ins_frt_01_rr.png" alt="" />
                    <p>X SERIES KELLY™ KEXM</p>
                </div>
            </ScrollContainer>
        </div>
    )
}
