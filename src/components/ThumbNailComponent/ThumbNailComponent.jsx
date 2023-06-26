import React, {useState} from 'react'
import './ThumbNailComponent.css'
import AudioPlayerComponent from '../AudioPlayerComponent/AudioPlayerComponent'

function ThumbNailComponent({imageItem}) {
    const [modal, setModal] = useState(false)

    const toggleModal = () =>{
        setModal(!modal)
    }
  return (
    <div className='card'>
        <div className='text-container'>
            <img src={imageItem.filePath} alt={imageItem.filename}/>
            <h4 className='filename'>{imageItem.filename}</h4>
            <button className='playbtn' onClick={toggleModal}>Play</button>

            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <AudioPlayerComponent imageURL = {imageItem.filePath}/>
                        <button className='close-modal' onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ThumbNailComponent