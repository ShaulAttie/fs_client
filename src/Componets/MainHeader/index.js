import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="container__MainHeader">
      <div className="name__MainHeader"><span>Name</span></div>
      <div className="type__MainHeader"><span>Type</span></div>
      <div className="size__MainHeader"><span>Size</span></div>
      {/* <div className="date__MainHeader"><span>Date</span></div> */}
    </div>
  );
};

export default MainHeader;
