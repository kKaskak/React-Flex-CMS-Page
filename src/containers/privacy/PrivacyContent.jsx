import React from 'react'
import './Privacy.css'
import { MdPrivacyTip } from 'react-icons/md'
const PrivacyContent = () => {
  return (
    <>
      <div className='gpt7__privacy section__padding'>
         <h1 className='gradient__text gpt7__privacy-heading'><MdPrivacyTip style={{marginRight: '1rem', color: '#fff'}}/> Privacy Policy</h1>
      </div>
      <div className='policy section__padding' style={{paddingTop: 0}}>
        <p>This privacy policy outlines how GPT-7 Connect collects, uses, and protects the personal information of individuals who use our services as a middle person connecting startups with creators. We are committed to ensuring the privacy and security of the information provided to us.</p>

          <h2>1. Information We Collect</h2>

          <p>We may collect the following types of personal information:</p>
          <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and position</li>
              <li>Any additional information voluntarily provided by the user</li>
          </ul>

          <h2>2. How We Use the Information</h2>

          <p>We use the collected information for the following purposes:</p>
          <ul>
              <li>To connect startups with suitable creators</li>
              <li>To communicate with users regarding our services</li>
              <li>To personalize and improve the user experience</li>
              <li>To send promotional emails and newsletters (with user consent)</li>
              <li>To respond to user inquiries and provide support</li>
              <li>To comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing and Disclosure</h2>

          <p>We may share personal information with third parties in the following circumstances:</p>
          <ul>
              <li>With the consent of the user</li>
              <li>With creators for the purpose of connecting them with startups</li>
              <li>With service providers who assist us in delivering our services</li>
              <li>When required by law or to protect our legal rights</li>
          </ul>

          <h2>4. Data Security</h2>

          <p>We have implemented reasonable security measures to protect the personal information we collect. However, please note that no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>5. Your Choices and Rights</h2>

          <p>Users have the right to:</p>
          <ul>
              <li>Access, update, or delete their personal information</li>
              <li>Withdraw consent for certain processing activities</li>
              <li>Object to the processing of their personal information</li>
              <li>Request a copy of the information we hold about them</li>
          </ul>

          <h2>6. Children's Privacy</h2>

          <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe that we have collected personal information from a child without parental consent, please contact us immediately so that we can take appropriate action.</p>

          <h2>7. Changes to This Privacy Policy</h2>

          <p>We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page with a revised effective date. We encourage users to review this privacy policy periodically to stay informed about how we handle their personal information.</p>
      </div>
      <div className='footer__privacy' style={{paddingTop: '3rem'}}>
          <p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
          <p style={{padding: '1rem', lineHeight: '1.2rem'}}>We are an online marketing agency that helps startups get recognised.</p>
       </div>
    </>
  
  )
}

export default PrivacyContent