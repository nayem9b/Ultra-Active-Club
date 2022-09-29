import React from 'react'
import pic from './IMG_20211022_174133.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg lg:px-40">
        <div className="flex-1">
          <FontAwesomeIcon icon={faPersonWalking} />
          <a className="btn btn-ghost normal-case text-xl">My-Exercise-Log</a>
        </div>

        <div className="flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={pic} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
