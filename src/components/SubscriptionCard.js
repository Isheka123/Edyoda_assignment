import React from 'react'
import "./SubscriptionCard.css"
import time from '../assets/time.png'
import RazorpayIcon from '../assets/RazorpayIcon.png'

function SubscriptionCard() {
 
  return (
    <div>
        <div className="right-section">
        <div className="subscription">
        <div className="container">
            <div className="signup">
              <div className='round'>1</div>
              <p className='text'>Sign Up</p>
            </div>
            <div className='Subs'>
            <div className='round'>2</div>
            <p className='text'>Subscribe</p>
            </div>
        </div>
          <h2>Select your subscription plan</h2>
          <div className="subscription-plans">
            <div id = "redbox" className="subscription-plan">
              <div className='side'>
                <input type = "radio" name='box1' value = "0" className='custom-radio1' disabled />
                   <div className = "offer">
                      <p className = "expired">Offer expired</p>
                      <h3>12 Months Subscription</h3>
                   </div>
               </div>
              <div className='total'>
                  <p>Total: <span className='rupee'>₹99</span></p>
                  <p><span className='rupee1'>₹8</span> <span className='month'>/mo</span></p>
              </div>
            </div>
            <div id="greenbox" className="subscription-plan">
              <div className='side'>
              <input
                    type="radio"
                    name="box"
                    value="1"
                    className="custom-radio"
                    id="radio-1"
                  />
              <label htmlFor="radio-1" className="custom-radio-label"></label>
                <div className='offer'>
                    <p className = "most">Recommended</p>
                    <h3>12 Months Subscription</h3>
                </div>   
             </div>
                <div className='total'>
                    <p>Total: <span className='rupee'>₹179</span></p>
                    <p><span className='rupee1'>₹15 </span><span className='month'>/mo</span></p>
                </div>
              </div>
            <div className="subscription-plan">
            <div className='side'>
             <input
                type="radio"
                name="box"
                value="2"
                className="custom-radio"
                id="radio-2"
              />
            <label htmlFor="radio-2" className="custom-radio-label"></label>
          <div className='offer'>
              <h3>6 Months Subscription</h3>
          </div>
            </div>
             <div className='total'>
                <p>Total: <span className='rupee'>₹149</span></p>
                <p><span className='rupee1'>₹25</span> <span className='month'>/mo</span></p>
            </div>
            </div>
            <div className="subscription-plan">
            <div className='side'>           
              <input
                type="radio"
                name="box"
                value="3"
                className="custom-radio"
                id="radio-3"
              />
              <label htmlFor="radio-3" className="custom-radio-label"></label>
              <div className='offer'>
              <h3>3 Months Subscription</h3>
              </div>
            </div>
              <div className='total'>
              <p>Total: <span className='rupee'>₹99</span></p>
              <p><span className='rupee1'>₹33</span> <span className='month'>/mo</span></p>
              </div>
            </div>
           <div className="horizontal-line"></div>
            <div className="plan-details">
            <p>Subscription Fee</p>
            <p> ₹18,500</p>
            </div>
          </div>
          <div className="limited-offer">
          <div className="offer-details">
          <div className='details'>
          <p className='offer'> Limited Time Offer</p>
              <p className='price'>-₹18,401</p>
              </div>
              <div className='icon'>
            <img src={time} alt='icon'/>
            <p>Offer valid till 25 March 2023</p>
            </div>
            </div>
            <div className='cost'>
            <p className="total-incl-gst"><span>Total</span> (Incl. of 18% GST)</p>
            <p className='money'> ₹149</p>
            </div>
            
          </div>
          <div className="buttons">
            <button className="cancel-button">CANCEL</button>
            <button className="proceed-button">PROCEED TO PAY</button>
          </div>
          <img src={RazorpayIcon} alt='logo'/>
        </div>
      </div>

    </div>
  )
}

export default SubscriptionCard
