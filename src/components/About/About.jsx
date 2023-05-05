import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>Destination for all InfoSec Compliances</h1>
      <div className="about-section">
        <div className="left-about-section">
          <div className="left-main">
            <h3>Company...</h3>
            <p>
              Information Systems plays an imperative role to make
              organizational success and create a brand image in minds of
              customers.
            </p>
            <p>
              NUK 9 Information Security Auditors LLP, commonly referred as,
              “NUK 9 Auditors”, leads into it.
            </p>
            <p>
              India&apos;s first LLP Company, driven professionally and fully
              Focused, Governed and Managed in the arena of Information Systems
              Security, GRC, Certification and Training Assurance Services.
            </p>
          </div>
        </div>
        <div className="right-about-section">
          <div className="right-main">
            <p>
              Our Track record of extensive and exclusive 20+ years hands-on
              expertise in the field of IT Assurance, Consulting and
              Certification Assessment Services with vide industry and
              engagement exposures. Having consultants with industry reputed and
              globally accepted qualifications and certifications.
            </p>
            <p>
              At NUK 9 Deliveries is always a Top Priority Our Expertise
              guarantees 100% improvement on the client&apos;s Process, Security
              and Practices (PSP)
            </p>
            <h3>Our Strength...</h3>
          </div>
        </div>
      </div>
      <div className="about-sec-details">
        <button>Our Detailed Profile</button>
      </div>
    </div>
  );
};

export default About;
