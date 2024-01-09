import React from "react";
import homeImg from "../assets/profileImage.png";
import reactImg from "../assets/reactIMG.png";
import javaScriptImg from "../assets/javaScript.png";
import htmlImg from "../assets/html.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="col-lg-12">
          <div className="col-lg-2 intro d-flex">
            <div style={{ "font-size": "3rem" }}>🖐️</div>
            <div className="">
              <p>Hello, I am</p>
              <p className="name"> Sarthak</p>
            </div>
          </div>
        </div>

        <div className="col-md-12 d-flex">
          <div className="col-md-2 introText slideIn">
            <p>I Love React</p>
          </div>
          <div
            className="col-md-8"
            style={{
              "align-items": "center",
              display: "flex",
              "justify-content": "center",
            }}
          >
            <div className="circle fadeInAndScaleUp"></div>
            <img
              src={homeImg}
              alt=""
              style={{
                width: "28rem",
                "z-index": "1 !important",
                position: "relative",
              }}
            />
          </div>
          <div className="col-md-2">
            <div
              className="logoImg leftSlide"
              style={{ "margin-left": "-10rem" }}
            >
              <img src={reactImg} alt="" style={{ height: "5rem" }} />
            </div>
            <div
              className="logoImg leftSlide"
              style={{ "margin-top": "3rem", "margin-left": "-3rem" }}
            >
              <img src={javaScriptImg} alt="" style={{ height: "5rem" }} />
            </div>
            <div
              className="logoImg leftSlide"
              style={{ "margin-left": "-10rem", "margin-top": "2rem" }}
            >
              <img src={htmlImg} alt="" style={{ height: "5rem" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
