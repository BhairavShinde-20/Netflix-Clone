import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="gap"></div>
            <div className="row1">
                <div class="call">
                    <h3>Questions?Call <a href="tel:000-800-040-1843">000-800-040-1843
                    </a></h3>
                </div>
                <div className="footer">
                    <div>
                        <li>FAQ</li>
                        <li>Help Centre</li>
                        <li>Account</li>
                        <li>Media Centre</li>
                    </div>
                    <div>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Ways to Watch</li>
                        <li>Terms of Use</li></div>
                    <div>
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                        <li>Corporate Information</li>
                        <li>Contact Us</li></div>
                    <div>
                        <li>Speed Test</li>
                        <li> Legal Notices</li>
                        <li>Only on Netflix</li><br />
                    </div>
                </div>
                <div className="call1">
                    <div className='call2'>
                    <select className="language">
                        <option value="">&#xF3EE; English</option>
                        <option value="">&#xF3EE; मराठी</option>
                        <option value="">&#xF3EE; हिन्दी</option>
                    </select>
                    <li>Netflix India</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;