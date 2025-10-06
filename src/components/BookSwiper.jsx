import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/BookSwiper.module.css";

import BookCard from "./BookCard.jsx";

export default function BookSwiper({ books, title }) {
  if (!books || books.length === 0) return <p>No books found</p>;
  return (
    <div className={styles.swiperContainer}>
      {title && <h2>{title}</h2>}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
