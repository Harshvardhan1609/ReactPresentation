import React from 'react'
import Contact from './components/contact/Contact';
import Handling from './components/handling/Handling';
import Navbar from './components/navar/Navbar'
import Options from './components/options/Options';
import Power from './components/power/Power'
import Speed from './components/speed/Speed';
import Project from './components/project/project';
import Projectflow from './components/projectflow/projectflow';
import Helixtv from './components/helixtv/helixtv'
import Mody from './components/Mody/Mody';
import Disadvantages from './components/Disadvantages/Disadvantages';

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Project />
      <Projectflow />
      <Helixtv />
      <Mody/>
      <Disadvantages/>
      <Contact />
    </>
  );
}

export default App;
