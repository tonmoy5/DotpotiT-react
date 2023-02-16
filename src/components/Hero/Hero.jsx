import React from 'react'
import heroImg from '../../assets/img/hero-img.svg'

const Hero = () => {
    return (
        <section id="hero" class="d-flex align-items-center">

            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Help Business Successful Online</h1>
                        <h2>Welcome to Dotpot iT, a digital agency specializing in custom web & mobile app development. Our team works
                            closely with clients to deliver beautiful, functional products through user-centered design and latest
                            technology.</h2>
                        <div>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={heroImg} class="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero