import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import styles from "./ListPost.module.css";
import { Link } from "react-router-dom";

const ListPost = () => {
  return (
    <>
      <Header title="Danh sách dự án" />
      <div className="py-1 text-left">
        <Link to="/posts/new" className="button primary mb-1">
          Thêm dự án
        </Link>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: "50px" }}>STT</th>
              <th>Tên dự án</th>
              <th style={{ width: "180px" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>asdsadasddsa</td>
              <td>
                <Link to="/posts/update/sdadkasjdlkasjd" className="button light">
                  Sửa
                </Link>
                <button className="button light">Xóa</button>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>
                <Link to="/saldkjaslkdjaslkdjaslkd">sdaskdjaksdjals;d</Link>
              </td>
              <td>
                <Link to="/posts/update/sdadkasjdlkasjd" className="button light">
                  Sửa
                </Link>
                <button className="button light">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default ListPost;
