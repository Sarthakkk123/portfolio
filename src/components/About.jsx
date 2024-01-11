import React from "react";
import frontEndImg from "../assets/frontEnd.png";
import gameImg from "../assets/Gamer.png";
import softwareDeveloperImg from "../assets/softwareEngineer.png";
// import "./About.css"; // Import your custom styles if needed

const About = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 aboutTxt">
            <span>I Can Turn </span>
            <span className="blueTxt">Your Pixels</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 aboutTxt">
            <span>Into </span>
            <span className="blueTxt">Code</span>
          </div>
        </div>

        <br />
        <br />

        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-12 boxes">
            <div className="img-container">
              <img className="aboutImg" src={frontEndImg} alt="" />
            </div>
            <div className="text-container">
              <div className="title">Frontend Developer</div>
              <div className="description">
                I am a frontend engineer at Infosys with 1.5+ years of experience
                in designing and developing web applications.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 boxes">
            <div className="img-container">
              <img className="aboutImg" src={gameImg} alt="" />
            </div>
            <div className="text-container">
              <div className="title">Gamer</div>
              <div className="description">
                Also, I'm good at gaming. I played various PC games like GTA V,
                RDR2.
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 boxes">
            <div className="img-container">
              <img className="aboutImg" src={softwareDeveloperImg} alt="" />
            </div>
            <div className="text-container">
              <div className="title">Software Engineer</div>
              <div className="description">
                I'm currently working as an React developer in Infosys where I'm
                responsible for large scale project development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
