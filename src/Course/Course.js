import React from "react";
import { Link } from "react-router-dom";
import HeroFooter from "../Asset/Footer";

const Course = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light  px-5 py-1"
        style={{ backgroundColor: "#F58634" }}
      >
        <Link
          class="navbar-brand font-weight-bolder text-dark"
          style={{ fontSize: "30px" }}
          to="/"
        >
          <img src="ss58.png" className="img-fluid w-75" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto text-white justify-content-center align-items-md-center">
            {/* <Link class="nav-link mx-4 text-white font-weight-bold" to="/Donors">
            Courses
          </Link>
          <Link
            class="nav-link mx-4 text-white font-weight-bold"
            to="/Applications"
          >
            Contact US{" "}
          </Link> */}
            <Link
              to="/HelpSomeone"
              class="nav-link font-weight-bold mx-4 text-white"
            >
              Forum{" "}
            </Link>

            <Link to="/Login">
              {" "}
              <button
                class="button loginBtn btn-light font-weight-bold bg-light   mx-4"
                style={{ color: "#F58634" }}
                type="button"
              >
                Log Out
              </button>
            </Link>

            {/* <h2>Pill Buttons</h2> */}

            {/* <button class="button">Pill Button 1</button> */}
            {/* <button class="button">Pill Button 2</button> */}
          </div>
        </div>
      </nav>

      <section
        style={{ backgroundColor: "#F58634" }}
        className="my-5   overflow-hidden"
      >
        <div className="row justify-content-center align-items-center mx-5 ">
          <div className="col-md-2 text-center">
            <img
              src="botwithgirl.png"
              className=" "
              style={{ height: "260px", width: "180px" }}
            />
          </div>
          <div className="col-md-7 text-left text-light">
            <h1 className="font-weight-bold">A2Z TODDLER</h1>
            <h7 className="my-3">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used <br /> to demonstrate the visual form of a
              document or a typeface without relying on meaningful content.
            </h7>
          </div>
          <div className="col-md-3 text-light my-5 my-md-0">
            <div className="d-flex ">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOQuGo892zfyR9q1Mb3xShxNVDZB7qGslNxrwO9GZoTcyLOriI"
                className="circler w-50"
              />

              <p>
                <b>Instructor</b> <br />
                Instructor Name
                <div className="text-center mt-2">
                  <div className="btn btn-secondary px-5  font-weight-bold text-dark ">
                    Continue
                  </div>
                </div>
              </p>
            </div>

            {/* <img src="images.jpg" className="w-50 img-fluid circler" /> */}
          </div>
        </div>

        <div className="row d-flex flex-row-reverse mx-5">
          <div className="col-md-10 ">
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3px",
                alignItems: "end",
                borderRadius: "4px",
              }}
            />
            <div className="row my-1 justify-content-center align-items-center text-light mb-3">
              <div className="col-md-2 d-flex my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
                <span className="ml-2">
                  <b>4 Hours</b>
                </span>
              </div>
              <div className="col-md-3  d-flex my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-share-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>{" "}
                <span className="ml-2">
                  <b>5 Projects</b>
                </span>
              </div>
              {/* <div className="col-md-4 d-flex text-center justify-content-center align-items-center">
                <span className=" text-center">
                  <b>Progress:</b>
                </span>
                <div class="progress w-100 mx-2">
                  <div
                    class="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: "71%" }}
                    aria-valuenow="71"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="">
                  <b>71%</b>
                </span>
              </div> */}
              <div className="col-md-3  my-1">
                <div className="btn btn-secondary text-black px-5 py-2">
                  <b> Go To Course </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-3 mx-5">
        <div className="row gap-5 justify-content-center align-items-center">
          <div
            className="col-md-3 text-center text-light py-3 px-1 overflow-hidden"
            style={{ backgroundColor: "#F58634" }}
          >
            <img
              src="https://preview.keenthemes.com/metronic/theme/html/demo9/dist/assets/media/svg/avatars/029-boy-11.svg"
              className="circler bg-white w-75 absolute"
              style={{ top: "129px" }}
            />
            <div className=" text-center text-light">
              <h3 className="font-weight-bold">Student Name</h3>
              <h5 className="my-3">
                Student ID: <span>2023-01-001</span>
              </h5>
              <h5 className="my-3">
                Class: <span>5</span>
              </h5>
              <h5>
                Course Assigned: <span>3</span>
              </h5>
            </div>
            <div className="text-center  ">
              <div className="btn btn-secondary font-weight-bold text-black px-5 py-2">
                Go To Course
              </div>
            </div>
            <div className="row mx-1 text-center my-3">
              <div className=" d-flex text-center justify-content-center align-items-center">
                <span className=" text-center">
                  <b>Progress:</b>
                </span>
                {/* <ProgressBar now={60} />{" "} */}
                <div class="progress w-100 mx-2 text-center">
                  <div
                    class="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: "71%" }}
                    aria-valuenow="71"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="text-center">
                  <b>71%</b>
                </span>
              </div>
            </div>

            <div className="text-center text-light">
              <h2>
                <u>Achievements</u>
              </h2>
              <h5 className="my-3">
                Points: <span>3</span>
              </h5>
              <h5 className="my-3">
                <u>BADGES</u>
              </h5>
              <img src="images.jpg" className="w-50 img-fluid circler" />
            </div>

            <div className="btn btn-light px-5 my-3 py-2 font-weight-bold">
              Talk With Us
            </div>
            <h6 className="text-light">
              <u>Report a Problem</u>
            </h6>
          </div>

          <div className="col-md-8">
            <div
              className="  px-4 py-3 text-black my-"
              style={{ backgroundColor: "#FBCBA8", borderRadius: "12px" }}
            >
              <div>
                <h1>
                  <b>A2Z TODDLER</b>
                </h1>
                <h6>
                  <>
                    {" "}
                    Line 16:13: img elements must have an alt prop, either with
                    meaningful text, or an empty string for decorative images
                    jsx-a11y/alt-text Line 40:13: img elements must have an alt
                    prop, either with meaningful text, or an empty string for
                    decorative images jsx-a11y/alt-text
                  </>
                </h6>

                <div className="row mt-4 justify-content-center align-items-center">
                  <div className="col-md-2 d-flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                    <span className="ml-2">
                      <b>4 Hours</b>
                    </span>
                  </div>
                  <div className="col-md-3  d-flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-share-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>{" "}
                    <span className="ml-2">
                      <b>5 Projects</b>
                    </span>
                  </div>
                  <div className="col-md-4 d-flex text-center justify-content-center align-items-center">
                    <span className=" text-center">
                      <b>Progress:</b>
                    </span>
                    {/* <ProgressBar now={60} />{" "} */}
                    <div class="progress w-100 mx-2">
                      <div
                        class="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: "71%" }}
                        aria-valuenow="71"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="">
                      <b>71%</b>
                    </span>
                  </div>
                  <div className="col-md-3  ">
                    <div className="btn btn-secondary text-black px-4 py-2">
                      <b> Go To Course </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="  px-4 py-3 text-black my-2"
              style={{ backgroundColor: "#FBCBA8", borderRadius: "12px" }}
            >
              <div>
                <h1>
                  <b>A2Z TODDLER</b>
                </h1>
                <h6>
                  <>
                    {" "}
                    Line 16:13: img elements must have an alt prop, either with
                    meaningful text, or an empty string for decorative images
                    jsx-a11y/alt-text Line 40:13: img elements must have an alt
                    prop, either with meaningful text, or an empty string for
                    decorative images jsx-a11y/alt-text
                  </>
                </h6>

                <div className="row mt-4 justify-content-center align-items-center">
                  <div className="col-md-2 d-flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                    <span className="ml-2">
                      <b>4 Hours</b>
                    </span>
                  </div>
                  <div className="col-md-3  d-flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-share-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>{" "}
                    <span className="ml-2">
                      <b>5 Projects</b>
                    </span>
                  </div>
                  <div className="col-md-4 d-flex text-center justify-content-center align-items-center">
                    <span className=" text-center">
                      <b>Progress:</b>
                    </span>
                    {/* <ProgressBar now={60} />{" "} */}
                    <div class="progress w-100 mx-2">
                      <div
                        class="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: "71%" }}
                        aria-valuenow="71"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="">
                      <b>71%</b>
                    </span>
                  </div>
                  <div className="col-md-3  ">
                    <div className="btn btn-secondary text-black px-4 py-2">
                      <b> Go To Course </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroFooter />
    </div>
  );
};

export default Course;