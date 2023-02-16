import React from 'react'
import about from '../../assets/img/about-img.svg'
import { Receipt, Box} from 'react-bootstrap-icons'

const About = () => {
    return (
        <section id="about" class="about">
        <div class="container">

            <div class="row justify-content-between">
                <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
                    <img src={about} class="img-fluid" alt="" data-aos="zoom-in" />
                </div>
                <div class="col-lg-6 pt-5 pt-lg-0">
                    <h3 data-aos="fade-up">Our Key Features</h3>
                    <p data-aos="fade-up" data-aos-delay="100">
                    Services That We Deliver Makes Us Dignified As One of The Top App Development Companies.</p>
                    <div class="row">
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <Receipt className='icon'/>
                        <h4>Custom web and mobile app development</h4>
                        <p>Our team of experts specialize in developing custom web and mobile apps to meet your unique needs and
                        bring your ideas to life.</p>
                    </div>
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <Box className='icon'/>
                        <h4>User-centered design and use of latest technologies</h4>
                        <p>Our focus on user-centered design and use of the latest technologies ensure that your finished
                        product is both beautiful and functional, delivering an exceptional user experience.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About