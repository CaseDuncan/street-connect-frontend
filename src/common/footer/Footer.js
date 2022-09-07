import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div>
      <div className='quick-links'>

        <div className='social-links'>
        <Link to={"facebook.com"}>Facebook</Link>
        <Link to={"facebook.com"}>LinkedIn</Link>
        <Link to={"twitter.com"}>Twitter</Link>
        </div>
        <h5>&copy;Street-connect 2022</h5>
      </div>
     
    </div>
  )
}

export default Footer