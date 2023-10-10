import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from './UserContext';

const Navbar = () => {
  const [currentuser, setCurrentuser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { loggedIn, logout } = useUserContext();

  const showLoginOptions = () => {
    if (currentuser !== null || loggedIn) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </li>

        </>);
    } else {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            SignUP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </>
    }
  }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
      <div className='container'>
        <NavLink class="navbar-brand" to="#"><img style={{ width: "45px", height: "45px", borderRadius:'25px'}}
          src="https://media1.thehungryjpeg.com/thumbs2/ori_3807385_nxxi2d8hk9w2dz16c0tphdxvmv3g0l880021pv04_monogram-rr-logo-design.jpg"
          alt="" /></NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <NavLink className="navbar-brand font-weight-bolder" to="/">
          RoomieRentals
        </NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="browsespace">
                Browse Space
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="addrentproperty">
                Add Rent Property
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="managespace">
                Manage Space
              </NavLink>
            </li>
            {showLoginOptions()}
          </ul>

        </div>
      </div>
    </nav>

  )
}

export default Navbar