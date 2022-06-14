import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Form from "../../components/Form";

const NewPost = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header title="Thêm dự án" />
      <div className="py-1 text-left">
        <Link to="/posts" className="button primary">
          Danh sách dự án
        </Link>
      </div>
      <Form onSubmit={onSubmit} />
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default NewPost;
