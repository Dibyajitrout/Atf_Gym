import React from 'react'
import './Main.css';
import Formvalid from './Formvalid';
import { Link } from 'react-router-dom';
// import Feturedetails from './Feturedetails';
export default function Main(props) {
    return (
        <>
            <div className='overaly'>
                <video src='../images/video.mp4' muted autoPlay loop />
            </div>
            <div className='banner-text' data-aos="fade-up">
                <h2>WELCOME TO</h2>
                <h1>ALL TIME FITNESS</h1>
                <button className='btn1'><Link className='text-dec link-color' to="/Construction">EXPLORE NOW</Link></button>
            </div>

            <div className='features'>
                <h1>
                    FEATURES
                    <hr className='hr' />
                </h1>
                <div className='fe-box'>
                    <Link className='main-link' to='/Weightlift'>
                        <div className='box1 co-box' data-aos="flip-left">
                            <img src='../images/aimage1.png' alt='' />
                            <div className='content'>
                                <h2>WeightLifting</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Link>


                    <Link className='main-link' to='/SpecificMuscles'>
                        <div className='box2 co-box' data-aos="flip-left">
                            <img src='../images/aimage2.png' alt='' />
                            <div className='content'>
                                <h2>Specific Muscles</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Link>

                    <Link className='main-link' to='/FlexMuscles'>
                        <div className='box3 co-box' data-aos="flip-left">
                            <img src='../images/aimage3.png' alt='' />
                            <div className='content'>
                                <h2>Flex Your Muscle</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Link>

                    <Link className='main-link' to='/Cardio'>
                        <div className='box4 co-box' data-aos="flip-left">
                            <img src='../images/aimage4.png' alt='' />
                            <div className='content'>
                                <h2>Cardio Exercise</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>


            <div className='off-container'>
                <div className='offer'>
                <div className='cont' data-aos="fade-up-right">
                    <h1>A BIG <span>OFFER</span> FOR</h1>
                    <h1>THIS SUMMER</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <button className='btn1'>JOIN NOW</button>
                    </div>
                </div>
            </div>


            <div className='form'>
                <Formvalid />
            </div>


        </>
    )
}
