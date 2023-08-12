import React from "react";
import "./Home.css";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import SubscriptionCard from "./SubscriptionCard";

const Home = () => {
  return (
      <div className="homepage">
        <div className="left-section">
          <h2>
            Access curated courses worth
            <br /> <span className="highlight"> ₹18,500 </span>  at just <span className="element"> ₹99 </span> per year!
          </h2>
          <div className="feature">
            <img src={Icon1} alt="Small Logo" />
            <p>
              <span className="element">100+</span> job relevant courses
            </p>
          </div>
          <div className="feature">
            <img src={Icon2} alt="Small Logo" />
            <p>
              <span className="element">20,000+</span> Hours of content
            </p>
          </div>
          <div className="feature">
            <img src={Icon3} alt="Small Logo" />
            <p>
              <span className="element">Exclusive</span> webinar access
            </p>
          </div>
          <div className="feature">
            <img src={Icon4} alt="Small Logo" />
            <p>
              Scholarship worth <span className="element">₹94,500</span>
            </p>
          </div>
          <div className="feature">
            <img src={Icon5} alt="Small Logo" />
            <p>
              {" "}
              <span className="element"> Ad Free</span> learning experience
            </p>
          </div>
        </div>
        <SubscriptionCard />
      </div>
     
     
  
  );
};

export default Home;
