import "./Layout.css";
import React from "react";
import Header from "./Componets/Header";
import Main from "./Componets/Main";
import Footer from "./Componets/Footer";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container__Layout">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:path1" element={<Main />} />
          <Route path="/:path1/:path2" element={<Main />} />
          <Route path="/:path1/:path2/:path3" element={<Main />} />
          <Route path="/:path1/:path2/:path3/:path4" element={<Main />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
