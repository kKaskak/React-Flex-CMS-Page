import React from 'react'
import './Privacy.css'
import { MdPrivacyTip } from 'react-icons/md'
const PrivacyContent = () => {
  return (
    <>
      <div className='gpt7__privacy section__padding'>
         <h1 className='gradient__text gpt7__privacy-heading'><MdPrivacyTip className='social' style={{marginRight: '1rem'}}/> Privacy Policy</h1>
      </div>
      <div className='policy section__padding' style={{paddingTop: 0}}>
        <p>This privacy policy outlines how GPT-7 Connect collects, uses, and protects the personal information of individuals who use our services as a middle person connecting brands with creators. We are committed to ensuring the privacy and security of the information provided to us.</p>

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
              <li>To connect brands with suitable creators</li>
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
              <li>With creators for the purpose of connecting them with brands</li>
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
          <h2>7. Our services</h2>

          <p>We provide different services both for brands and creators. We help brands find a sutaible content creator that will perfectly align with their product/service and promote their product/service. We also help creators find brands that are willing to pay them via affiliate marketing, PPC or a fixed amount per story, post or video. Now you, as a brand or a content creator, don't have to spend hours on researching the suitable creator/brand.</p>
          <h2>7. Our profit</h2>

          <p>We get payed on a contract.</p>
          <p>If you are a brand:</p>
          <ul>
              <li>You might ocasionally be connected for free with a creator that is willing to work with you.</li>
              <li>The number of creators that we find specifically for your brand, who are ready to start working with you.</li>
              <li>The reach (audience) of a creator that you will work with.</li>
              <li>A % of sales of your service/product that was made through us.</li>
          </ul>
          <p>How you get payed as a creator:</p>
          <ul>
              <li>You might ocasionally be connected for free with a brand that is willing to work with you.</li>
              <li>Based on views, likes, CPL or a % of the MMR which was created from the traffic you got.</li>
              <li>You get your payment via paypal or a different service that we agree on in our contract.</li>
              <li>The amount you get payed heavily depends on the amount of people who buy the brand product/service or visit their website.</li>
          </ul>

          <h2>8. Changes to This Privacy Policy</h2>

          <p>We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page with a revised effective date. We encourage users to review this privacy policy periodically to stay informed about how we handle their personal information.</p>
      </div>
      <div className='footer__privacy' style={{paddingTop: '3rem'}}>
          <p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
       </div>
    </>
  
  )
}

export default PrivacyContent