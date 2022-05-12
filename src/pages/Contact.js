import React from "react";

// Fill data
import { dataContact } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import Navigation from "../compenents/react/Navigation";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contact-content">
                <form action="/my-handling-form-page" method="post">
                    <ul>
                        <li>
                            <label for="name"><p>Name:</p></label>
                            <input type="text" id="name" name="user_name" placeholder='Your Name' />
                        </li>
                        <li>
                            <label for="mail"><p>E-mail:</p></label>
                            <input type="email" id="mail" name="user_email" placeholder='Your Mail' />
                        </li>
                        <li>
                            <label for="msg"><p>Message:</p></label>
                            <textarea id="msg" name="user_message" placeholder='Your Message'></textarea>
                        </li>
                        <li>
                            <button type="submit"><h3>Send</h3></button>
                        </li>
                    </ul>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;