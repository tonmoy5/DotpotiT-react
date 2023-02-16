import React from 'react'
import { Link } from 'react-router-dom'
import { BsTextRight } from 'react-icons/bs';

const Navbar = () => {
return (
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

        <div class="logo">
            <h1 class="text-light"><Link to="index.html"><span>Dotpot iT</span></Link></h1>
            {/* <Link to="/"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link> */}
        </div>

        <nav id="navbar" class="navbar">
            <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About Us</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a class="getstarted scrollto" id="jobs" href="#jobs">Apply for jobs</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"><BsTextRight /></i>
        </nav>

        </div>
    </header>
    )
}

export default Navbar