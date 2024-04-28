import React from 'react'
import './Main.css';

export default function Feturedetails(props) {
  return (
    <>
       <div className='features'>
                <h1>FEATURES</h1>
            </div>
      <div className='opt'>
        <div className='img'>
          <img src={props.imgsrc} alt='' />
        </div>
        <div className='pgrap'>
          <h2>{props.title}</h2>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  )
}
