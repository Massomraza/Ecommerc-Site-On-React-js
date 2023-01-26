import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2>Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.4350055694404!2d74.854053!3d32.727638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e848c66c5e6b5%3A0x5db58b84c2ead72d!2sSONY%20BOUTIQUE!5e0!3m2!1sen!2sin!4v1671688529989!5m2!1sen!2sin" width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/myyagdkv" method="POST" className='contact-inputs'>
            <input type="text" placeholder='Username' required name='username' autoCapitalize='true' autoComplete='off'/>

            <input type="email" placeholder='Email' required name='email' autoCapitalize='true' autoComplete='off'/>

            <textarea name="message" id="" cols="30" rows="10" placeholder='Write your message' required autoComplete='off' autoCapitalize='true'></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
   padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;

export default Contact;