import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NewPost from "./pages/Posts/NewPost";
import UpdatePost from "./pages/Posts/UpdatePost";
import ListPost from "./pages/Posts/ListPost";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path=":nameAscii" element={<Detail />} />
          <Route path="posts">
            <Route index element={<ListPost />} />
            <Route path="new" element={<NewPost />} />
            <Route path="update/:id" element={<UpdatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
