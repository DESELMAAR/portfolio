import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const CardCarousel = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "This is the first card." },
    { id: 2, title: "Card 2", content: "This is the second card." },
    { id: 3, title: "Card 3", content: "This is the third card." },
    { id: 4, title: "Card 4", content: "This is the fourth card." },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Carousel</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
