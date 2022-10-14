import React from "react";
import cupcake4 from "../Assets/cupcake4.jpg";
import cupcake2 from "../Assets/cupcake2.jpg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${cupcake4})` }}
      ></div>
      <div className="aboutBottom">
        <hr></hr>
        <h1> ABOUT US</h1>
        <hr></hr>
        <p>
          Due to ongoing circumstances of Covid-19, we have transitioned our
          bakery to an online-only model and have partnered with Goldbelly. All
          Goldbelly orders will be shipped and can be shipped nationwide! Due to
          limited staff and packaging restrictions, we are unable to produce or
          ship Kupcakes at this time. We are exclusively producing Whoopie Pies
          and Cookies for now. We understand that many of you miss our signature
          Kupcakes, and we do too! However, we think you should give our Whoopie
          Pies a try as they are essentially Kupcake Sandwiches using the same
          delicious moist Kupcake batter and the sweet creamy Buttercream you
          already know and love!
        </p>
        <p>
        Since 1996, SugarDust Bakery has been one of India's most-cherished
        bakeshops and set the standard for tried-and-true desserts and baked
        goods. Learn more about our journey from neighborhood gem to sweet
        success.Hospitality is at the heart of the SugarDust Bakery experience.
        We believe a respectful, empathetic working environment is crucial to
        creating a positive team experience and keeping our guests happy.
        Interested in one of the sweetest gigs around? Visit our careers page to
        see openings at all of our India locations.Even though we're famous
        worldwide, SugarDust Bakery remains a neighborhood bakery at heart.
        We're committed to serving our local communities by supporting small
        businesses, charities, schools, and bake sales. If you're seeking a
        product donation for your cause, reach out to Hello@SugarDustbakery.com
        or use the link below to tell us more!
        </p>
      </div>
    </div>
  );
}

export default About;
