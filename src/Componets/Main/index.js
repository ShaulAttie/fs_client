import axios from "axios";
import "./Main.css";
import React, { useContext, useEffect, useState } from "react";
import { ctx, hrefctx } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import File from "../File";
import MainHeader from "../MainHeader";
// import Popup from "../Popup";

const Main = () => {
  const { readedFiles, setReadedFiles } = useContext(ctx);
  const { href, setHref } = useContext(hrefctx);

  const [read_b, setRead_b] = useState();
  const [result, setResult] = useState();

  const navigate = useNavigate();

  const paramsObj = useParams();
  const path = Object.values(paramsObj).join("/");
  // console.log("path: ", path);
  setHref(path)

  // const Logo = "📁";
  const Name = "root";
  // const Size = 20;
  // const Date = Date.now()

 

  /////////////////////////////////////// READ FILES from FOLDER
  useEffect(() => {
    path &&
      axios({
        method: "get",
        url: `http://localhost:4000/files/read`,
        params: {
          path: path,
        },
      })
        .then((result) => setResult(result))
        .catch((error) => console.log(error || "error"));
  }, [path, readedFiles]);

  /////////////////////////////////////// READ FILES from FOLDER
  // function read_bFun(path_b) {
  //   // const formData = new FormData();
  //   // formData.append("read_b_Fun", read_b);

  //   axios({
  //     method: "get",
  //     url: `http://localhost:4000/files/read_b`,
  //     params: {
  //       path: path_b,
  //     },
  //   })
  //     // .then((result) => console.log(result.data))
  //     .then((result) => setRead_b(result.data))
  //     .catch((error) => console.log(error || "error"));
  // }
  ////////////////////////////////////////////////////////////////
  function handleOnCLick(e) {
    if (e.target.innerText.split(".")[1] !== undefined) {
      // read_bFun(e.target.baseURI.slice(22) + "/" + e.target.innerText);
      console.log("read and show file");
    } else {
      navigate(`${e.target.innerText}`);
    }
  }

  function handleDoubleClick(e) {
    // console.dir(e.target);
  }

  return (
    <div className="main">
      <div className="container__Main" >
        <MainHeader />
        {path === "" ? (
          <File Name={Name} onClick={handleOnCLick} onDoubleClick={handleDoubleClick}/>
        ) : (
          result &&
          result.data.map((file) => (
            <File
              Name={file.name}
              Type={file.name.split(".")[1]}
              key={file.name}
              onClick={handleOnCLick}
            />
          ))
        )}
        {/* {(isPopup) && <Popup setOnClick={setOnClick}/>} */}
      </div>
      <div className="main_read_files">
        main_read_files
        {read_b ? <div>{read_b}</div>: <div>main_read_files</div>}
        {/* {read_b.data ? <div>{read_b}</div> : <div>main_read_files</div>} */}
      </div>
    </div>
  );
};

export default Main;
