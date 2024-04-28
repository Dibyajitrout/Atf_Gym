import React from 'react'
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';
import Membership from './Components/Membership';
import Weightlift from './Components/Weightlift';
import SpecificMuscles from './Components/SpecificMuscles';
import FlexMuscles from './Components/FlexMuscles';
import Cardio from './Components/Cardio';
import Trainers from './Components/Trainers';
import Gallery from './Components/Gallery';
import Construction from './Components/Construction'

function App() {
  return (
    <div className="App">
      <Headroom>
        <Header />
      </Headroom>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Membership' element={<Membership />} />
        <Route path='/Weightlift' element={<Weightlift />} />
        <Route path='/SpecificMuscles' element={<SpecificMuscles />} />
        <Route path='/FlexMuscles' element={<FlexMuscles />} />
        <Route path='/Cardio' element={<Cardio />} />
        <Route path='/Trainers' element={<Trainers />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Construction' element={<Construction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
