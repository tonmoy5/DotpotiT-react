import React from 'react'
import { Dribbble,File,Speedometer,Globe, Link } from 'react-bootstrap-icons'


const Service = () => {
    return (
        <section id="services" class="services section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Services</h2>
                    <p>Check out the great services we offer</p>
                </div>

                <div class="row">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div class="icon-box">
                    <div class="icon"><Dribbble /></div>
                    <h4 class="title"><a href="">Client Centric Development</a></h4>
                    <p class="description">We craft the client's needs on web, mobile, and blockchain to tailor the solutions
                        and enhance growth of the businesses.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                    <div class="icon-box">
                        <div class="icon"><File/></div>
                        <h4 class="title"><a href="">Dedicated Development Team</a></h4>
                        <p class="description">Our skilled team leverage projects to provide best results.The team dedicates their
                        every effort and does not look back until it's accomplished.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                    <div class="icon-box">
                        <div class="icon"><Speedometer /></div>
                        <h4 class="title"><a href="">Excellent Support</a></h4>
                        <p class="description">We are always there to assist our clients in every possible way to meet client's
                        expectations and end needs.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                    <div class="icon-box">
                        <div class="icon"><Globe /></div>
                        <h4 class="title"><a href="">Quality Deliverance</a></h4>
                        <p class="description">We believe in delivering quality products to our clients by assuring all their
                        project specifications at the best industry competitive price.</p>
                    </div>
                </div>

                </div>

            </div>
        </section>
    )
}

export default Service