import React from 'react'
import { Link } from 'react-router-dom'
import error from './404.gif'

function PageNotFound() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 mt-5'>
          <div className='card shadow'>
            <div className='card-body'>
              <img src={error} style={{width: "200px"}}alt="404"/>
              <h3 className='card-title'>404 Page Not Found</h3>
              <Link to="/" className='btn btn-outline-dark'>Go Back</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PageNotFound