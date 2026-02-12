import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMotion</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <NavLink to="/general" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/business" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Business
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/entertainment" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Entertainment
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/health" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Health
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/science" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Science
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/sports" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                        Sports
                      </NavLink>
                    </li>

                  </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
