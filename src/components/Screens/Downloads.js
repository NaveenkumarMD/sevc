import React, { useRef } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import '../../css/downloads.css'
import DownloadImage from '../../assets/download.jpg'
import { HiDownload } from 'react-icons/hi'
function Downloads() {
    const downloadref=useRef(null)

    return (
        < >
            <Navbar />
            <div className='downloads'>
                <div className='download-container-1'>
                    <div className='title-1 download-title '> DOCUMENTS</div>
                    <div className='downloads-list'>
                        <div className='download-container'>
                            <div className='one'>
                                <div className='image-cont'>
                                    <img src={require("../../assets/document_icon.png")} alt='download' />
                                </div>
                                <div className='download-desc'>
                                    {/* <div className='download-titlex'>Rule book</div> */}
                                    <div className='download-descx'>
                                        SEVC-2023 EVENT INFORMATION DOCUMENT
                                        <a style={{display:"none"}} ref={downloadref} download href={require("../../assets/Downloads/SEVC 2023_EVENT INFORMATION DOCUMENT.pdf")}>download</a>
                                    </div>
                                </div>
                            </div>
                            <div className='download-btn' onClick={()=>downloadref.current.click()} >
                                <div>Download</div>
                                <HiDownload />
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Downloads
