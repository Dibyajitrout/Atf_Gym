import React from 'react'
import Qanda from './Qanda'

export default function Membership() {
    return (
        <>
            <div className='mem-container'>
                <div className='mem-img'>
                    <img src='../images/membership.jpg' alt='img.jpg' />
                </div>
                <div className='mem-info'>
                    <div className='mem-head1'>
                        <div className='mem-head2'>
                            <h2 className='mem-benifit'>Membership Benefits <hr className='hr mem-hr' /></h2>
                            <p>All the members of All Time Fitness are provided with the best gym facilities along with the top class guidance under experienced trainers. Not only that, we also help our gym members to participate in various sports competitions at state, national and international levels.</p>
                        </div>
                    </div>
                    <div className='mem-qanda'>
                    <h2 className='mem-benifit'>Frequently Asked Questions<hr className='hr mem-hr' /></h2>
                        <div className='qanda'>
                            <Qanda />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
