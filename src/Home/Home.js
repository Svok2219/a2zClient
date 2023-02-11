import React from "react";
import HeroFooter from "../Asset/Footer";
import Navbar from "../Asset/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="banner px-5 py-5" style={{ backgroundColor: "#F58634" }}>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-6 text-left text-light">
            <div
              className="text-light font-weight-bolder"
              style={{ fontFamily: "sans-serif", fontSize: "40px" }}
            >
              <p>
                Wellcome to
                <br />
                Exceed Robotics LMS
              </p>
            </div>
            {/* <br /> */}
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, ...
            </h5>
            <button
              class="button loginBtn btn-light font-weight-bold bg-light  px-5 "
              style={{ color: "#F58634", letterSpacing: 1.9, fontSize: "20px" }}
              type="button"
            >
              Log In
            </button>{" "}
          </div>
          <div
            className="col-md-6 text-center py-4"
            style={{ backgroundColor: "#E7AF86", borderRadius: "12px" }}
          >
            <img
              src="https://thelab.org.au/wp-content/uploads/2020/04/The-labrobot.png"
              className="img-fluid w-75"
            ></img>
          </div>
        </div>
      </div>

      <div className="my-5"> </div>

      <HeroFooter />
    </div>
  );
};

export default Home;
