import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg lg:px-40">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Exercise-Log</a>
        </div>

        <div className="flex">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary mr-4">
              9+
            </span>
            <button className="btn mr-4">inbox</button>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
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
