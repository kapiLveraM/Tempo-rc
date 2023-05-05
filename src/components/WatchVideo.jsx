import React from "react";
import crical from "../assets/image/png/crical.png";
import ComingSoon from "../assets/image/png/coming_soon.png";
import PlayBtn from "../assets/image/svg/play.svg";
const WatchVideo = () => {
  return (
    <>
      <section className="py-5 position-relative z_index_5  ">
        <img
          src={crical}
          alt=""
          classNameName=" position-absolute crical_3 animation_circle"
        />
        <img
          src={crical}
          alt=""
          classNameName=" position-absolute crical_4 animation_circle"
        />

        <div className="blur_3 position-absolute z_index_n_1 animation"></div>
        <div className="blur_4 position-absolute z_index_n_1 animation"></div>
        <div className="container">
          <h2 className=" fw-normal fs_4xl ff_highspeed text-light text-center pt-3">
            watch video
          </h2>
          <div className="row justify-content-center align-items-center">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="400"
              data-aos-easing="liner"
              className="col-lg-10 pt-3 pt-sm-5"
            >
              <div className="position-relative">
                <img src={ComingSoon} alt="ComingSoon" classNameName=" w-100" />
                <a
                  href="https://youtu.be/0HJWxVsfONc"
                  className="position-absolute play_buttom "
                >
                  {" "}
                  <img src={PlayBtn} alt="" classNameName="play_buttom_width" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchVideo;
