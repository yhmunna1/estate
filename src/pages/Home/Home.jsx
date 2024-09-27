import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Property from "./Property";
import LatestProperty from "./LatestProperty";

const Home = () => {
  return (
    <div className="">
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

      {/* Section 2 */}

      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg p-5 rounded-lg mt-10">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Area
                </option>
                <option>Area 1</option>
                <option>Area 2</option>
                <option>Area 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Category
                </option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Type
                </option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Rooms
                </option>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Beds/Baths
                </option>
                <option>1 Bed/Bath</option>
                <option>2 Beds/Baths</option>
                <option>3 Beds/Baths</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Status
                </option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select Price
                </option>
                <option>$1000-$2000</option>
                <option>$2000-$3000</option>
                <option>$3000-$4000</option>
              </select>
            </div>
            <div>
              <button className="btn bg-red-600 text-white w-full">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
      <Property></Property>
      <LatestProperty></LatestProperty>
    </div>
  );
};

export default Home;
