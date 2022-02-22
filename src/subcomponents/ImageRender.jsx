import React from 'react'
import './ImageRender.css'
import beast from '../assets/beast.jpg';
import man from '../assets/man.jpg';
import wizard from '../assets/wizard.jpg';
const ImageRender = ({images}) => {

  return (
  <div className='images'>
  {console.log(images.man.heading)}
    <div>
      <img src={man} alt={`${images.man.heading}`} className='image-man'/>
    </div>
    <div>
      <img
      src={wizard} alt={`${images.wizard.heading}`} className='image-wizard'/>
    </div>
    <div>
      <img src={beast} alt={`${images.beast.heading}`}  className='image-beast'/>
    </div>
  </div>
  )
}

export default ImageRender