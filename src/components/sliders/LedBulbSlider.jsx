import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ledBulbData } from "../../data/Data";
import SingleProduct from "../product/SingleProduct";

const LedBulbSlider = () => {
  return (
    <section className="fz-4-led-bulb-section pb-120">
      <div className="container">
        <div className="fz-4-section-heading">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading__txt">
                <h2 className="fz-section-title">LED Bulbs</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-heading__actions d-flex justify-content-md-end justify-content-center">
                <div className="fz-4-product-slider-nav fz-3-slider-nav">
                  <button className="fz-4-prev">
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button className="fz-4-next">
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          className="fz-4-product-slider owl-carousel"
          slidesPerView={4}
          spaceBetween={15}
          navigation={{
            prevEl: ".fz-4-prev",
            nextEl: ".fz-4-next",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            480: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            992: {
              slidesPerView: 4,
            },
          }}
        >
          {ledBulbData.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleProduct
                img={item.img}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LedBulbSlider;