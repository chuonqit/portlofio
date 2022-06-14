import React from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./Detail.module.css";
import "./Swiper.css";

import { Pagination, Navigation } from "swiper";

const Detail = () => {
  const { nameAscii } = useParams();
  return (
    <>
      <div className="px-1 m-0">
        <Header
          title="web developer portfolio"
          description="From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects."
        />
      </div>
      <div className="px-1 my-1">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img src="https://thanhtay.edu.vn/wp-content/uploads/2021/11/Portfolio-la-gi.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.pinimg.com/originals/4c/20/14/4c20146b84fd0c38ff01c813522de955.jpg" />
          </SwiperSlide>
        </Swiper>
        <Link to="/" className={styles.buttonVisit}>
          Visit the website
        </Link>
        <div className="text-left">
          <h2 className={styles.title}>Thông tin về tự án</h2>
          <div className={styles.divider}></div>
          <div className={styles.textContent}>
            The idea behind this project was to create a showcase of everything I've worked on in the past few years. I
            tried to keep the UI as simple as possible coupled with the web technologies that I believe make most sense
            for a non reactive website in todays (2014) web development stack. I've used nodejs with expressjs on the
            server, rendering the views with handlebars (server and client side). The website content database is
            crafted with mongodb and I've used redis to persist the session across the socket.io powered web sockets.
          </div>
          <h2 className={styles.title}>Công nghệ</h2>
          <p>Công nghệ được áp dụng vào trong dự án.</p>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            <li>UI/UX Design </li>
            <li>UI/UX Architechture </li>
            <li>UI/UX Animations </li>
            <li>Web Components </li>
            <li>Responsive Website Design </li>
            <li>HTML5 – semantic, audio, video, canvas </li>
            <li>CSS3 – preprocessed with SASS + COMPASS </li>
            <li>Node.js </li>
            <li>MongoDB and Redis </li>
            <li>Socket.io </li>
            <li>Handlebars </li>
            <li>Express.js </li>
            <li>Require.js </li>
          </ul>
          <h2 className={styles.title}>Tài nguyên</h2>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            <li>UI/UX Design </li>
            <li>UI/UX Architechture </li>
            <li>UI/UX Animations </li>
          </ul>
        </div>
      </div>
      <div className="px-1 mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Detail;
