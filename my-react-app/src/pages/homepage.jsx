import React from 'react'
import {Outlet} from "react-router-dom";
import About from '../about';
import Billboard from '../billboard';
import Footer from '../footer';
import Facilities from '../facilities';
import Navbar from '../navigation'


export default function homepage() {
  return (
    <><>
    <Navbar />
    <About />
    <Billboard />
  </><>
      <Facilities/>
      <Footer />
      <Outlet />
  </></>
  )
}

