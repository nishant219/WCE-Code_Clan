import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {FaClinicMedical} from 'react-icons/fa';
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className=" container ">
          <div className="d-flex gx-4 col-lg-4">
            <div className="m-1 px-2">
           <FaClinicMedical className="text-white "></FaClinicMedical>
           </div>
          <a href="/" className="navbar-brand">MED-ON-CHAIN</a>
</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a href="/" className="nav-link text-light ">Home</a>
              </li>
              <li className="nav-item">
                <a href="/store" className="nav-link text-light">Store Records</a>
              </li>
              <li className="nav-item">
                <a href="/ownership" className="nav-link text-light">Check Ownership</a>
              </li>
              <li className="nav-item">
                <a href="/transfer" className="nav-link text-light">Transfer Ownership</a>
              </li>
              <li className="nav-item">
                <a href="/me" className="nav-link text-light">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;