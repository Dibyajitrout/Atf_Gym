import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Qanda() {
  return (
    <>
      <Accordion>
      <div data-aos="slide-left">
      <Accordion.Item className='abc' eventKey="0">
        <Accordion.Header className='head-color'>How do I join All Time Fitness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div data-aos="slide-right">
      <Accordion.Item className='abc' eventKey="1">
        <Accordion.Header className='head-color'>How much is the membership fees at ATF?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div data-aos="slide-left">
      <Accordion.Item className='abc' eventKey="2">
        <Accordion.Header className='head-color'>How do I join All Time Fitness?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div data-aos="slide-right">
      <Accordion.Item className='abc' eventKey="3">
        <Accordion.Header className='head-color'>Are there any extra charges to pay once I have joined ATF?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
    </>
  )
}
