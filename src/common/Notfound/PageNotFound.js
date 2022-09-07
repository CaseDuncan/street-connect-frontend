import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 mt-5'>
          <div className='card shadow'>
            <div className='card-body'>
              <h3 className='card-title'>404 PageNotFound</h3>
              <Link to="/" className='btn btn-outline-dark'>Go Back</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PageNotFound