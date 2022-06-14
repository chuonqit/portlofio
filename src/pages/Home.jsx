import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

const Home = () => {
  return (
    <>
      <div className="px-1">
        <Header
          title="Web developer portfolio"
          description="From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects."
        />
      </div>
      <div className="py-1">
        <Project title="Angular" />
        <Project title="ReactJS" />
      </div>
      <div className="px-1">
        <Footer />
      </div>
    </>
  );
};

export default Home;
