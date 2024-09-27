import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero bg-cover bg-center"
            style={{
              height: "600px",
              backgroundImage: "url(https://i.ibb.co.com/bbTC0Sx/hero-4.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Gorgeous House in New York
                </h1>
                <p className="mb-5">
                  5 BD | 6 BA | 190.00 FT <sup>2</sup>
                </p>
                <button className="btn bg-red-600 border-0 text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero bg-cover bg-center"
            style={{
              height: "600px",
              backgroundImage:
                "url(https://i.ibb.co.com/tcNLKFr/decor2-1920x790.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Family House In Hudson
                </h1>
                <p className="mb-5">
                  3 BD | 2 BA | 120.00 FT <sup>2</sup>
                </p>
                <button className="btn bg-red-600 border-0 text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero bg-cover bg-center"
            style={{
              height: "600px",
              backgroundImage: "url(https://i.ibb.co.com/3Tx2TN6/hero-2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Luxury Villa In Rego Park
                </h1>
                <p className="mb-5">
                  3 BD | 2 BA | 150.00 FT <sup>2</sup>
                </p>
                <button className="btn bg-red-600 border-0 text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero bg-cover bg-center"
            style={{
              height: "600px",
              backgroundImage: "url(https://i.ibb.co.com/p3ft2Cq/hero-3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Park Avenue Apartment
                </h1>
                <p className="mb-5">
                  3 BD | 2.5 BA | 130.00 FT <sup>2</sup>
                </p>
                <button className="btn bg-red-600 border-0 text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
