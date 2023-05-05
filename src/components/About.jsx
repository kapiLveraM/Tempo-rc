import React from "react";
import Badman from "../assets/image/png/badman.png";
const About = () => {
  return (
    <>
      <section id="about" className="py-sm-5 position-relative z_index_1  ">
        <div className="container pt-sm-5">
          <div className="row  justify-content-between align-items-center flex-column-reverse pb-sm-5 flex-lg-row">
            <div
              data-aos="fade-down-right"
              className="col-lg-6 text-center text-lg-start pt-5 pt-lg-0"
            >
              <h2 className=" ff_highspeed fw-normal fs_4xl text-light">
                About
              </h2>
              <p className=" fw-normal fs_sm text-light ff_magra">
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
              <div className="mt-5">
                <a
                  href="#"
                  className=" fw-normal fs_sm ff_highspeed text-light connect_button"
                >
                  mint now
                </a>
              </div>
            </div>
            <div
              data-aos="fade-down-left"
              className="col-lg-5 text-center text-lg-start"
            >
              <img src={Badman} alt="Badman" classNameName=" w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
