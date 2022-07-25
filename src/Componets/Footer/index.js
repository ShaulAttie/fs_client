import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FooterInfo from "../FooterInfo";
import "./Footer.css";
import { ctx } from "../../context";

const Footer = () => {
  const [currentFile, setCurrentFile] = useState();
  const [currentFolder, setCurrentFolder] = useState();
  const [currentFF, setCurrentFF] = useState();
  const [copyFF, setCopyFF] = useState();
  const [rename, setRename] = useState();
  const [renameF, setRenameF] = useState();
  const [newRenameF, setNewRenameF] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [isNewFile, setIsNewFile] = useState(true);
  const [isDelete, setIsDelete] = useState(true);
  const [isCopy, setIsCopy] = useState(true);
  const [isRename, setIsRename] = useState(true);
  const { readedFiles, setReadedFiles } = useContext(ctx);

  const inFile = window.location.href.slice(22);

  function showInfo(e) {
    const fileList = e;
    console.log(fileList);
    setCurrentFile(fileList);
  }

  /////////////////////////////////////// SEND FILES
  function sendFile(e) {
    if (currentFile.size / 1024 > 5) return alert("This file is too big!!!");
    const formData = new FormData();
    formData.append("new_file", currentFile);
    formData.append("path", inFile);

    axios({
      method: "post",
      url: `http://localhost:4000/files/upload/`,
      data: formData,
    })
      .then((result) => setReadedFiles(result))
      .catch((error) => console.log(error || "error"));
    setIsNewFile(true);
  }

  /////////////////////////////////////// CREATE FOLDER
  function createFolder(e) {
    const formData = new FormData();
    formData.append("new_folder", currentFolder);
    formData.append("path", inFile);

    axios({
      method: "post",
      url: `http://localhost:4000/files/create`,
      data: formData,
    })
      .then((result) => setReadedFiles(result))
      .catch((error) => console.log(error || "error"));
    setIsCreate(true);
  }

  /////////////////////////////////////// RENAME FOLDER
  function renameFolder(e) {
    const formData = new FormData();
    formData.append("rename_folder", renameF);
    formData.append("rename_folder", newRenameF);
    formData.append("path", inFile);

    axios({
      method: "put",
      url: `http://localhost:4000/files/rename`,
      data: formData,
    })
      .then((result) => setReadedFiles(result))
      .catch((error) => console.log(error || "error"));
    setIsRename(true);
  }

  ////////////////////////////////////////// DELETE FILE
  function deleteFile(e) {
    const formData = new FormData();
    formData.append("del_FF", currentFF);
    formData.append("path", inFile);

    axios({
      method: "delete",
      url: `http://localhost:4000/files/delete`,
      data: formData,
    })
      .then((result) => setReadedFiles(result))
      .catch((error) => console.log(error || "error"));
    setIsDelete(true);
  }

  ////////////////////////////////////////// COPY FILE
  function copyFFFun() {
    const formData = new FormData();
    formData.append("copy_FF", copyFF);
    formData.append("path", inFile);

    axios({
      method: "post",
      url: `http://localhost:4000/files/copy`,
      data: formData,
    })
      .then((result) => setReadedFiles(result))
      .catch((error) => console.log(error || "error"));
    setIsCopy(true);
  }

  return (
    <div className="container__Footer">
      <div className="mLeft__Footer"></div>
      <div className="fileInfo__footer">
        {currentFile && <FooterInfo>{currentFile}</FooterInfo>}
      </div>
      <div className="form__Footer">
        <div className="createFile__Footer">
          {/* ////////////////////////////////////////////////////// */}
          {isNewFile ? (
            <button onClick={() => setIsNewFile(false)}>Add File</button>
          ) : (
            <div className="inputim_footer">
              <label>Add a file:</label>
              <div className="input_button">
                <input
                  type="file"
                  onChange={(e) => showInfo(e.target.files[0])}
                />
                <button onClick={(e) => sendFile(e)}>Add file</button>
              </div>
            </div>
          )}
        </div>

        <div className="createFolder__Footer">
          {/* /////////////////////////////////////////////////// */}
          {isCreate ? (
            <button onClick={() => setIsCreate(false)}>Create Folder</button>
          ) : (
            <div className="inputim_footer">
              <label>Create a Folder:</label>
              <div className="input_button">
                <input
                  value={currentFolder}
                  onChange={(e) => setCurrentFolder(e.target.value)}
                />
                <button onClick={(e) => createFolder(e)}>Create Folder</button>
              </div>
            </div>
          )}
        </div>

        <div className="RenameFolder__Footer">
          {/* /////////////////////////////////////////////////// */}
          {isRename ? (
            <button onClick={() => setIsRename(false)}>Rename Folder</button>
          ) : (
            <div className="inputim_footer">
              <label>Rename Folder:</label>
              <div className="input_button">
                <input
                  value={renameF}
                  onChange={(e) => setRenameF(e.target.value)}
                />
                <label>To new name:</label>
                <div className="input_button">
                  <input
                    value={newRenameF}
                    onChange={(e) => setNewRenameF(e.target.value)}
                  />
                  <button onClick={(e) => renameFolder(e)}>
                    Rename Folder
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="copy__Footer">
          {/* //////////////////////////////////////////////////// */}
          {isCopy ? (
            <button onClick={() => setIsCopy(false)}>Copy File/Folder</button>
          ) : (
            <div className="inputim_footer">
              <label>Copy File:</label>
              <div className="input_button">
                <input
                  value={copyFF}
                  onChange={(e) => setCopyFF(e.target.value)}
                />
                <button onClick={(e) => copyFFFun(e)}>Copy</button>
              </div>
            </div>
          )}
        </div>

        <div className="delete__Footer">
          {/* //////////////////////////////////////////////////// */}
          {isDelete ? (
            <button onClick={() => setIsDelete(false)}>
              Delete File/Folder
            </button>
          ) : (
            <div className="inputim_footer">
              <label>Delete File:</label>
              <div className="input_button">
                <input
                  value={currentFF}
                  onChange={(e) => setCurrentFF(e.target.value)}
                />
                <button onClick={(e) => deleteFile(e)}>Delete</button>
                <span>* Will only delete Files and Empty Folders</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mRight__Footer"></div>
    </div>
  );
};

export default Footer;
