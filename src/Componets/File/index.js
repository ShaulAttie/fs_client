import React from "react";
import "./File.css";
import txt from "../../assets/txt-file.png";

const File = (props) => {
  var Logo;
  var Type;
  // const Name = props.Name.split(".")[0];
  if (props.Type === undefined) {
    Logo = "📁";
    Type = "folder";
  }
  if (props.Type === "exe") {
    Logo = "🔥";
  }
  if (props.Type === "txt") {
    Logo = "📝";
  }
  if (props.Type === "pdf") {
    Logo = "pdf";
  }

  return (
    <div className="container__File">
      <div className="name__File" >
        <div className="logo__file">{Logo}</div>
        <span onClick={props.onClick} onDoubleClick={props.onDoubleClick}>{props.Name}</span>
      </div>
      <div className="type__File">
        <div>
          {Type} {props.Type}
        </div>
      </div>
      <div className="size__File">
        <div>{props.Size}Mb</div>
      </div>
      {/* <div className="date__File"><span>{props.Date}</span></div> */}
    </div>
  );
};

export default File;
