import React from "react";
import cupcake2 from "../Assets/cupcake2.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${cupcake2})` }}>
        <div className="headerContainer">
          <h1> Cupcakes </h1>
          <br></br>
          <p> Little Cupcake Bakeshop</p>
        </div>
      </div>
      <p className="textt">
        <br></br> <br></br>
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
        <br></br> <br></br>
      </p>
      <hr></hr>
      <p className="textt">
        <br></br> 
        For more than 25 years, SugarDust Bakery has been making India's
        favorite baked goods the old-fashioned way: from scratch, in small
        batches, and using the finest ingredients. Our assortment includes our
        fan-favorite cakes and cupcakes, world-famous banana pudding, and a host
        of other classic baked goods, seasonal treats, and more.SugarDust Bakery
        is best known for our wide variety of freshly baked, classic American
        desserts, including cupcakes, banana pudding, cakes, cheesecakes, pies,
        muffins, cookies and bars—in fact, we have over 250 product varieties!
        We bake everything by hand and from scratch, using only the finest
        ingredients. In addition to our wide variety of products, what makes
        SugarDust Bakery special is that it's a truly hands-on experience: our
        desserts are made by hand and our cakes and cupcakes are iced in front
        of customers for a one-of-a-kind experience for bakers, icers, and
        customers alike.
        <br></br> <br></br>
      </p>
    </div>
  );
}

export default Home;
