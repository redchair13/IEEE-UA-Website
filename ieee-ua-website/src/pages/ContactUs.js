import React, { useState } from 'react';
import './ContactUs.css';
import { matchRoutes } from 'react-router-dom';
import Header from '../components/Header';
import headerBackground from "../icons/picture-home-page.jpeg";

function ContactUs() {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Clear the form after submission
        setInfo({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    }

    const sendMail = (event) => {
        const body = `Name: ${info.firstName} ${info.lastName} Email: ${info.email} Message: ${info.message}`;;
    
        var mail = `mailto:johannsonramos@gmail.com`
             + `?cc=`
             + `&subject=Test-Email`
             + `&body=${encodeURIComponent(body)}`;

             window.location.href = mail;

             event.preventDefault();

             setInfo({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
    }
        
    
    return (
        
            <div className='contact-us-page'>
                <Header backgroundImage={headerBackground}>
                <h1 id='title'> Contact Us</h1>
                </Header>
              

                <form className='contact-us-form' onSubmit={sendMail}>
                    <input 
                        className='contact-us-input' 
                        id='email-input' 
                        type='text' 
                        name="firstName" 
                        value={info.firstName} 
                        onChange={handleChange}
                        placeholder='FirstName'
                    />
       
                    <input 
                        className='contact-us-input' 
                        id='email-input' type='text' 
                        name="lastName" value={info.lastName} 
                        onChange={handleChange}
                        placeholder='LastName'
                    />
            
                    <input 
                        className='contact-us-input' 
                        id='email-input' type='text' 
                        name="email" value={info.email} 
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    <textarea
                        id='message' 
                        type='text' 
                        name="message" 
                        value={info.message} 
                        onChange={handleChange} 
                        placeholder='message'
                    />
                  
                <input id="submit" type='submit'></input>
                    
                </form>

               
            
            </div>
    );

}

export default ContactUs;