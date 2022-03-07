import React from 'react';
import ContactBanner from './ContactBanner';
import ContactSection from './ContactSection';
import Map from './Map';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

import Footer from '../Footer/Footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className='contact'>
                <ContactBanner />
                <ContactSection />
                <Map />
                <Footer />
            </div>
        </>

    );
}
export default Contact;