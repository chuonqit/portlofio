import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const UpdatePost = () => {
  return (
    <>
      <Header title="Sửa dự án" />
      <div className="py-1 text-left">
        <Link to="/posts" className="button primary mb-1">
          Danh sách dự án
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default UpdatePost;
