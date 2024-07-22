import React from 'react';

const MiddleSection = () => {
    return (
        <div className="stay-connected">
            <h1>We <span>stay connected</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="industry-events">
                            <img src="../../../../images/quatrBusiness.png" />
                            <h2>Quarterly Business Updates</h2>
                        </div>
                        <div className="business-updates">
                            <p>We strive to stay connected as a team through communication and collaboration.
                                This materializes every quarter through our Quarterly Business Update events.
                                These gatherings are immersive sessions where every team member, regardless of
                                rank or tenure, comes together to contribute to our overarching business strategy,
                                and stay connected. They are opportunities to learn from our seasoned leaders and
                                to also share personal insights and achievements that can steer our collective
                                future. In an ever-evolving engineering landscape, staying connected isn’t just
                                a benefit—it’s essential.</p>
                        </div>
                        <div className="industry-events">
                            <img src="../../../../images/industryNetwork.png" />
                            <h2>Industry Events & Networking</h2>
                        </div>
                        <div className="industry-events">
                            <img src="../../../../images/industryNetwork.png" />
                            <h2>Associations Memberships</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-section">
                            <img src="../../../../images/middleBanner.png" alt="Stay Connected" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;
