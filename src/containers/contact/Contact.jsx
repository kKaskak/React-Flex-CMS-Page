import React from 'react'
import { NavbarShort } from '../../components'
import ContactContent from './ContactContent'


const Contact = ({inputValue}) => {
  return (
    <>
    <NavbarShort />
    <ContactContent inputValue={inputValue} />
    </>
  )
}

export default Contact