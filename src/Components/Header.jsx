import React from 'react'
import { GiLaptop } from "react-icons/gi";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light fs-2 m-2'>
          <GiLaptop className='text-light fs-1 mx-2' />
          
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header