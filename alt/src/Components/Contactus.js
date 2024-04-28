import React from 'react'
import "./Main.css";
import Contactform from './Contactform';

export default function Contactus() {
  return (
    <>
      <div className='con-container'>
        <div className='con-img'>
          <img src='../images/contactus.jpg' alt='img.jpg' />
        </div>

        <div className='con-form'>
          <Contactform />
        </div>

        <div className='mapouter'>
          <div className='con-map' data-aos="zoom-in">
            <iframe loading="lazy" src="https://maps.google.com/maps?q=1068%2C%20ITER%20College%20Rd%2C%20Jagmohan%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751019&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="1068, ITER College Rd, Jagmohan Nagar, Bhubaneswar, Odisha 751019" aria-label="1068, ITER College Rd, Jagmohan Nagar, Bhubaneswar, Odisha 751019"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
