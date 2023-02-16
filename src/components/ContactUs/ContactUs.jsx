import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

            <div class="section-title">
            <h2>Contact Us</h2>
            <p>Contact us to get started</p>
            </div>

            <div class="row">

            <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div class="info">
                <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh.</p>
                </div>

                <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>help@dotpotit.com</p>
                </div>

                <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+880 1817 176 192</p>
                </div>

                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.247472043089!2d90.3658077145906!3d23.80979748456011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c154f4caa0ad%3A0x31fecdb3c5351d8d!2sDotpot%20iT!5e0!3m2!1sen!2sbd!4v1675153448200!5m2!1sen!2sbd"
                    frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
                </div>

            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="form-group col-md-6 mt-3 mt-md-0">
                    <label for="email">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" aria-describedby="email-error" />
                    <div id="email-error" class="invalid-feedback">
                        Please enter a valid email address.
                    </div>
                    </div>
                </div>
                <div class="form-group mt-3">
                    <label for="name">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                    <label for="message">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="10" required
                    placeholder="Enter your message here"></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>

            </div>

        </div>
    </section>
    )
}

export default ContactUs