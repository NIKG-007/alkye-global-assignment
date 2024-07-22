import React from 'react';
import Header from '../components/header';

const MainSection = () => {
  const profileImg = "../../../../images/profileImg.png"
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <img src="../../../../images/homeBanner.png" alt="Group" className="hero-image" />
          <div className="headline">
            <p>Home / Why work with us</p>
            <h1>Headline #1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section className="profile-section">
          <div className="profile-container">
            <div className="profile-item">
              <h5>01</h5>
              <div className="profile-inner">
                <span>We stay connected</span>
                <img src={profileImg} alt="Profile" />
              </div>
            </div>
            <div className="profile-item">
              <h5>02</h5>
              <div className="profile-inner">
                <span>We believe in diversity & inclusion</span>
                <img src={profileImg} alt="Profile" />
              </div>
            </div>
            <div className="profile-item">
              <h5>03</h5>
              <div className="profile-inner">
                <span>We celebrate success</span>
                <img src={profileImg} alt="Profile" />
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
};

export default MainSection;
