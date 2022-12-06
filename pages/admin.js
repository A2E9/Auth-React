import React, { useState } from 'react'
import { useAuth } from '../context/StateContext';

const Admin = () => {

    return (
    
        <><h1 className='center'>Welcome to Admin Panel</h1>
        </>
      
    )
}


export async function getStaticProps() {
    return {
      props: {
        protected: true,
        userTypes: ["admin"],
      },
    }
  }

export default Admin