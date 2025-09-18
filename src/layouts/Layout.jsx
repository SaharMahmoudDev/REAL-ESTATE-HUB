import React from 'react'
import BrowserPage from '../pages/BrowserPage'
import Section from '../components/ui/Section';
import Navbar from './../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../components/common/Footer';
import ScrollTopButton from '../components/ui/ScrollTopButton';

const Layout = () => {
  return (<>
    {/* <Section variant="border-b-0"> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
      {/* </Section> */}
      </>
  )
}

export default Layout