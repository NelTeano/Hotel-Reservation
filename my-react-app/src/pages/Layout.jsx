import React from 'react'
import {Outlet} from "react-router-dom";
import Navigation from '../navigation'

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
