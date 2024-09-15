import React from 'react'
import { Link } from 'react-router-dom';

const layout = () => {
  return (
    <>
        <header className="inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
              <p className='px-3 font-semibold text-2xl'>CraftMyCV</p>
          </div>
          <div className="flex lg:hidden justify-end">
        <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900 mx-2 hover:text-blue-500">
          Contact Us
        </Link>
      </div>
      
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/" className="text-md font-semibold leading-6 text-gray-900 mx-2 hover:text-blue-500">
          Home
        </Link>
        <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900 mx-2 hover:text-blue-500">
          Contact Us
        </Link>
      </div>
        </nav>
      </header>
    </>
  )
}

export default layout