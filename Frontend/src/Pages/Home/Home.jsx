import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import Homeservice from '../../Components/Homeservice/Homeservice'
import Homeenergyservice from '../../Components/Homeenergyservice/Homeenergyservice'
import Aboutcontent from '../../Components/Aboutcontent/Aboutcontent'
import Homeimageslider from '../../Components/Homeimageslider/Homeimageslider'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Collaboration from '../../Components/Collaboration/Collaboration'
import Ourteam from '../../Components/Ourteam/Ourteam'
import Vendor from '../../Components/Vendor/Vendor'
import RenergyInnovation from '../../Components/RenergyInnovation/RenergyInnovation'
import Pmsuryaghar from '../../Components/Pmsuryaghar/Pmsuryaghar'
import Brands from '../../Components/Brands/Brands'
import Solarservices from '../../Components/Solarservices/Solarservices'

const Home = () => {
  return (
    <>
    <Homehero/>
    <Homeservice/>
    <Brands/>
    <Pmsuryaghar/>
    {/* <Homeenergyservice/> */}
   
    
    <Solarservices/>
    <Homeimageslider/>

    <Testimonial/>
    <Vendor/>
    <Ourteam/>
    <RenergyInnovation/>
    
    
    {/* <Collaboration/> */}
    
    </>
  )
}

export default Home