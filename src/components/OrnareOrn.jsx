import React from "react";
import HeardeDwon from "../assets/image/svg/herdar_dowan.svg";
const OrnareOrn = () => {
  return (
    <>
      <section
        id="home"
        className="bg_img_header pt-md-5 flex-grow-1 d-flex min_vh_92 justify-content-center align-items-center z_index_1 overflow-hidden"
      >
        <div className="container">
          <div className=" col-lg-10 col-xl-8 col-xxl-7">
            <h2 className="ff_highspeed fs_5xl fw-normal text-light text-center text-md-start pt-5 pt-sm-0">
              Ornare orn nulla
              <span className="color_line "> sed turp</span> is blandit
            </h2>
            <p className="fw-normal fs_sm ff_magra text-light max_width_500 text-center text-md-start">
              Facilisi nec at ullamcorper consequat venenatis cursus sagittis.
              Aliquet venenatis urna ege.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-5 ml_n_45">
              <div>
                <a
                  href="#"
                  className="fw-normal fs_sm fs_xsm_10 ff_highspeed get_started_button text-light text-nowrap"
                >
                  Get Started
                </a>
              </div>
              <div className="ms-5">
                <a
                  href="#"
                  className="fw-normal fs_sm fs_xsm_10 ff_highspeed text-light learn_more_button text-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-5 mt-5">
            <a href="#down">
              <img src={HeardeDwon} alt="HeardeDwon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrnareOrn;
