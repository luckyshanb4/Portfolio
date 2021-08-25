import React from 'react'
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
              
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63405.91228953621!2d80.66979277669381!3d6.663088118929478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3f340fe7adc7b%3A0x644a4b5a08997d83!2sBalangoda!5e0!3m2!1sen!2slk!4v1629882411534!5m2!1sen!2slk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+94 713259275'}  title={'Phone'}/>
                    <ContactItem icon={email} text1={'luckyshanb4@gmail.com.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'86/3, Batuwaththa, Rathmalavinna, Balangoda'} text2={'Sri Lanka'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

