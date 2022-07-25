import React, { useContext, useEffect, useState } from "react";
import { hrefctx } from "../../context";
import "./Header.css";

const Header = (props) => {
  const { href, setHref } = useContext(hrefctx);

  return (
    <div className="container__Header">
      {/* <div className="subcontainer__Header"> */}
      <div className="marginL__Header"></div>
      <div className="logo__href">
        <div className="sub__logo__href">
          <div className="logo__Header">LOGO</div>
          <div className="href__Header">http://localhost:3000/{href}</div>
        </div>
      </div>
      {/* </div> */}
      <div className="search__Header">Search</div>
      <div className="marginR__Header"></div>
    </div>
  );
};

export default Header;
