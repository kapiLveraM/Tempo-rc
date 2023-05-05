import React from "react";
import cricale1 from "../assets/image/png/crical.png";
import StoryGif from "../assets/image/gif/gif_image.gif";
const Story = () => {
  return (
    <>
      <section id="down" className="  py-5 position-relative z_index_1">
        {/* <!-- <div className="bg_blur_hero position-absolute top-0"></div> --> */}
        <img
          src={cricale1}
          alt=""
          classNameName=" position-absolute crical_1 animation_circle"
        />
        <img
          src={cricale1}
          alt=""
          classNameName=" position-absolute crical_2 animation_circle"
        />
        <div className="blur position-absolute z_index_n_1 animation"></div>
        <div className="blur_2 position-absolute z_index_n_1 animation"></div>
        <div className="container pt-sm-5">
          <div className="row justify-content-between pt-sm-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className=" gradiant_gif z_index_2">
                <img
                  src={StoryGif}
                  alt=""
                  classNameName="w-100 border_radius_25"
                />
              </div>
            </div>
            <div
              className=" col-lg-6 text-center text-lg-start pt-5 pt-lg-0 position-relative z_index_2"
              data-aos="fade-left"
            >
              <h2 className=" fw-normal fs_4xl ff_highspeed text-light">
                STROY
              </h2>
              <p className=" fw-normal fs_md text-light ff_magra">
                Facilisi nec at ullamcorper consequat venenatis cursus sagittis.
                Aliquet venenatis, urna egestas elementum ultricies convallis
                amet. Cursus sed porta imperdiet tellus lorem nam leo.
                Sollicitudin risus suspendisse urna sed arcu sit. Ullamcorper
                diam nulla nulla enim. Mi mauris, tortor pharetra in pretium
                rhoncus. Egestas sollicitudin quis ullamcorper bibendum at amet
                vel. Pellentesque congue est parturient egestas. Viverra leo non
                tincidunt sed sed quam in. Augue justo lacus, magna at ornare
                sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
