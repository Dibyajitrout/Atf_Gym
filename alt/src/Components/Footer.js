import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='footer bg-dark'>
                <div className='s-footer'>
                    <div className='fast-half'>
                        <div className='fot-box'>
                            <div className='f-box H'>
                                <span><Link className='text-dec link-color' to="/">Home</Link></span>
                            </div>
                            <div className='f-box'>
                                <span><Link className='text-dec link-color' to='/Construction'>Service</Link></span>
                            </div>
                            <div className='f-box'>
                                <span><Link className='text-dec link-color' to='/Membership'>Membership</Link></span>
                            </div>
                            <div className='f-box'>
                                <span>Location</span>
                            </div>
                            <div className='f-box'>
                                <span><Link className='text-dec link-color' to='/Contactus'>Contact US</Link></span>
                            </div>
                        </div>
                    </div>

                    <div className='second-half'>
                        <div className='fotbox'>

                            <h1><span>|</span> Keep in Touch</h1>

                            <div className='fot-sechead'>
                                <div className='location'>
                                    <div className='icon'>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className='loc-text'>
                                        <h3>Address :</h3>
                                        <p>Infocity Ave,Patia.Bhubaneswara,Odisha</p>
                                    </div>
                                </div>

                                <div className='phone'>
                                    <div className='icon'>
                                        <i class="fa-solid fa-phone-flip"></i>
                                    </div>
                                    <div className='loc-text'>
                                        <h3>Phone :</h3>
                                        <p>+91 | 000-000-0000</p>
                                    </div>
                                </div>

                                <div className='email'>
                                    <div className='icon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='loc-text'>
                                        <h3>Email :</h3>
                                        <p>Alltimefitnessofficial@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='follow'>
                            <div className='follow-text'>
                                <h3>Follow US :</h3>
                            </div>
                            <div className='f-icon'>
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-square-instagram"></i>
                                <i class="fa-brands fa-square-x-twitter"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='footer-last bg-dark'>
                <div className='copyright'>
                    <h5>© COPYRIGHT - 2023 GET IN SHAPE WITH ATF</h5>
                </div>
                <div className='policy'>
                    <p>privacy Policy <span>|</span> Payment Policy <span>|</span> User Data Policy</p>
                </div>
            </div>

        </>
    )
}
