import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Menubar = () => {
  return (
    <div className='flex mx-6 gap-4'>
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default Menubar