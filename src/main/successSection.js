import React from 'react';

const SuccessSection = () => {
  const imgUrl = "../../../../images/"

  return (
    <div className="container">
      <header className="header">
        <div className="image-grid">
          <img src={imgUrl + "success1.png"} alt="Celebration 1" className="image-large" />
          <img src={imgUrl + "success2.png"} alt="Cycling" className="image-large" />
          <img src={imgUrl + "success3.png"} alt="Podium" className="image-large" />
        </div>
        <h1>We celebrate success</h1>
        <p>
          At CASE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in every effort put in these projects because they underscore the commitment and effort of each employee.
        </p>
      </header>

      <section className="celebration-section">
        <div className="text">
          <p>
            Some of our favorite events on the calendar include our coveted Melbourne Cup event incorporating morning tea, Christmas Party, happy hour, dinners and social mornings to celebrate milestones and special days. Taking the time to celebrate helps us stay motivated, creating great memories and ensuring everyone knows their efforts make a difference.
          </p>
        </div>
        <div className="image-grid">
          <img src={imgUrl + "success4.png"} alt="Cupcakes" className="image-small" />
        </div>
      </section>

      <section className="appreciation-program">
        <h2>Employee Appreciation Program</h2>
        <p>
          Our Employee Appreciation Program is tailored to honor the ongoing commitment and effort of all our long-serving team members.
        </p>
        <div className="image-grid">
          <img src={imgUrl + "success5.png"} alt="Diwali Celebration" className="image-small" />
        </div>
        <div className="text">
          <p>
            Our ‘Year Club’ and ‘10 Year Club’ are special milestones within the program, celebrating employees who have dedicated half a decade or a full decade to our annual employee appreciation program, showcasing our gratitude in grand style.
          </p>
        </div>
        <div className="image-grid">
          <img src={imgUrl + "success6.png"} alt="Gifts" className="image-small" />
        </div>
      </section>

      <footer className="footer">
        <div className="image-grid">
          <img src={imgUrl + "success7.png"} alt="Team Celebration" className="image-large" />
          <img src={imgUrl + "success8.png"} alt="Dinner" className="image-large" />
          <img src={imgUrl + "success.png"} alt="Group Photo" className="image-large" />
        </div>
      </footer>
    </div>
  );
};

export default SuccessSection;
