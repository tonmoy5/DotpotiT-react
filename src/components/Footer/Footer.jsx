import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Twitter, Facebook, Whatsapp, Github, Linkedin, Youtube, Tiktok, Telegram, Instagram, Snapchat } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="footer-newsletter">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <form action="" method="post">
                                <label for="email-input">Subscribe to our newsletter:</label>
                                <input type="email" name="email" id="email-input" placeholder="Enter your email address" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>Dotpot iT</h3>
                            <p>
                                House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh<br/><br/>
                                <b>Phone:</b> +880 1817 176 192<br/>
                                <b>Email:</b> help@dotpotit.com<br/>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link style={{textDecoration: "none"}} to="#">Home</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link style={{textDecoration: "none"}} to="#">About us</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link style={{textDecoration: "none"}} to="#">Services</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link style={{textDecoration: "none"}} to="#">Terms of service</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link style={{textDecoration: "none"}} to="#">Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                            <ul>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link to="#" style={{textDecoration:"none"}}>Web Design</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link to="#" style={{textDecoration:"none"}}>Web Development</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link to="#" style={{textDecoration:"none"}}>Product Management</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link to="#" style={{textDecoration:"none"}}>Marketing</Link></li>
                            <li><i class="bx bx-chevron-right"><ChevronRight /></i> <Link to="#" style={{textDecoration:"none"}}>Graphic Design</Link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p>Follow us on social media.</p>
                        <div class="social-links mt-3">
                            <Link to="https://www.twitter.com/dotpotit" class="twitter" target="_blank"><i class="bx bxl-twitter"><Twitter  className='footerIcon'/></i></Link>
                            <Link to="https://www.facebook.com/dotpotit" class="facebook" target="_blank"><i class="bx bxl-facebook"><Facebook  className='footerIcon'/></i></Link>
                            <Link to="https://wa.me/+8801817176192" class="whatsapp" target="_blank"><i class="bx bxl-whatsapp"><Whatsapp  className='footerIcon'/></i></Link>
                            <Link to="https://www.github.com/dotpotit" class="github" target="_blank"><i class="bx bxl-github"><Github  className='footerIcon'/></i></Link>
                            <Link to="https://www.linkedin.com/in/dotpotit" class="linkedin" target="_blank"><i class="bx bxl-linkedin"><Linkedin  className='footerIcon'/></i></Link>
                        </div>

                        <div class="social-links mt-3">
                            <Link to="https://www.youtube.com/@dotpotit" class="youtube" target="_blank"><i class="bx bxl-youtube"><Youtube className='footerIcon' /></i></Link>
                            <Link to="https://www.tiktok.com/@dotpotit" class="tiktok" target="_blank"><i class="bx bxl-tiktok"><Tiktok className='footerIcon'/></i></Link>
                            <Link to="https://t.me/dotpotit" class="telegram" target="_blank"><i class="bx bxl-telegram"><Telegram className='footerIcon' /></i></Link>
                            <Link to="https://www.instagram.com/dotpotit" class="instagram" target="_blank"><i class="bx bxl-instagram"><Instagram className='footerIcon'/></i></Link>
                            <Link to="https://snapchat.com/add/dotpotit" class="snapchat" target="_blank"><i class="bx bxl-snapchat"><Snapchat className='footerIcon'/></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container py-4">
                <div class="copyright">
                    &copy; Copyright <strong><span>Dotpot iT</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    {/* <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ -->
                    Designed by <a href="https://dotpotit.com/">Dotpot iT</a> */}
                </div>
            </div>

        </footer>
    )
}

export default Footer