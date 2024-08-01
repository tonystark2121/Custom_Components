import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../assets/Mask group.png";
import img2 from "../assets/419CF.png";
import img3 from "../assets/75AC6.png";

const images = [image1, img2, img3];

const Swipper = ({ currentIndex }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <Swiper
      ref={swiperRef}
      pagination={false}
      slidesPerView={1}
      navigation={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      a11y={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="photo" height={"100%"} width={"100%"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;
