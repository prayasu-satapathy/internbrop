import React from 'react'
import p2 from './p1.png';
import './Home.css';

function Navbar() {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src = {p2} height="40" width="40" className="img-responsive"/>
                        <a className="navbar-brand" href="#">BROP.in</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                            </li>
                           
                        </ul>
                       
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>

        </>
    )
}

export default Navbar;
