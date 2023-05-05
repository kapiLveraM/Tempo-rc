import React from "react";
import crical from "../assets/image/png/crical.png";
import BoyPra from "../assets/image/png/boy_chr.png";
import SuperMan from "../assets/image/png/super_woman.png";
import SuperLady from "../assets/image/png/super_lady.png";
import NextArrow from "../assets/image/svg/next.svg";
import PrevArrow from "../assets/image/svg/prev.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
const OurNft = () => {
  return (
    <>
      <section
        id="nft"
        className="bg-black py-3 py-lg-4 position-relative z_index_4"
      >
        <img
          src={crical}
          alt="crical"
          classNameName=" position-absolute  crical_5 animation_circle"
        />
        <div className="blur_5 position-absolute z_index_n_1 animation"></div>
        <div className="container py-4">
          <p className=" ff_highspeed fw-normal fs_4xl text-white text-center pt-sm-5">
            our nft
          </p>

          <div className=" center-slider pt-3 pt-md-5 mt-md-5">
            <div className=" pt-5 py-lg-5 my-5 mx-3">
              <div className="pt-5 mt-5">
                <div className="box gradiant box_shadow_inset  ">
                  <div className="text-center pb-3 ">
                    <img
                      src={BoyPra}
                      alt=""
                      classNameName=" width_91 mt_n_152"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-5 py-lg-5 my-5 mx-3">
              <div className="pt-5 mt-5">
                <div className="box gradiant box_shadow_inset ">
                  <div className="text-center pb-3">
                    <img
                      src={SuperMan}
                      alt=""
                      classNameName="width_100 mt_n_98"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-5 py-lg-5 my-5 mx-3">
              <div className="pt-5 mt-5">
                <div className="box gradiant box_shadow_inset ">
                  <div className="text-center pb-3">
                    <img
                      src={SuperLady}
                      alt=""
                      classNameName="width_100 mt_n_89 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={PrevArrow}
          alt=""
          classNameName="prev position-absolute slider_arrows_prev width_button"
        />
        <img
          src={NextArrow}
          alt=""
          classNameName=" next position-absolute slider_arrows_next width_button"
        />
      </section>
    </>
  );
};

export default OurNft;
