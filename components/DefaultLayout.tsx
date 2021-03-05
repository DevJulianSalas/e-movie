import React from 'react';
import { NavBar }  from './NavBar'
import Footer from './Footer'


export default function DefaultLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <NavBar/>
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer/>
    </>
  )
}