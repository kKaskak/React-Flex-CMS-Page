import React, { useState, useEffect } from 'react'
import {
    Footer,
    Blog,
    Possibility,
    Features,
    WhatGPT3,
    Header,
} from '../../containers'
import { CTA, Navbar } from '../../components'

const Home = ({onButtonClick}) => {
  const [isLoadedFull, setIsLoadedFull] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoadedFull(true)
    }, 600);
  }, [])
  
  return (
    <>
    <Navbar />
    <Header onButtonClick={onButtonClick} />
    {isLoadedFull && (
      <>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        {/* <Blog /> */}
        <Footer />
      </>
    )}
    </>
  )
}

export default Home