import React from 'react'
import Banner from './Banner'
import AddSection from './AddSection'
import Products from './Products'
import { ContactUs } from './ContactMe'
const Home = props => {
  return (
    <div>
         <Banner/>
         <AddSection/>
         <Products/>
         <ContactUs />
    </div>
  )
}

Home.propTypes = {}

export default Home