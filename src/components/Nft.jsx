import React from "react";
import Slider from "react-slick";
// import crical from "../assets/image/png/crical.png";
import BoyPra from "../assets/image/png/boy_chr.png";
import SuperLady from "../assets/image/png/super_lady.png";
import SuperMan from "../assets/image/png/super_woman.png";

function Nft() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className=" pt-5 py-lg-5 my-5 mx-3">
            <div className="pt-5 mt-5">
              <div className="box gradiant box_shadow_inset  ">
                <div className="text-center pb-3 ">
                  <img src={BoyPra} alt="" classNameName=" width_91 mt_n_152" />
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
        </Slider>
      </div>
    </>
  );
}

export default Nft;
