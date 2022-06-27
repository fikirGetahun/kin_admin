import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { albumActions } from "../../store/postData";
import "./css/fileUploader.css";
// drag drop file component
const DragDropFile = ({ selecter }) => {
  const dispatch = useDispatch();
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [photo, setPhoto] = useState();
  // ref
  const inputRef = useRef(null);
  //   if (dragActive) {
  //     alert("yes");
  //   } else {
  //     alert("no");
  //   }

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dro pped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      setPhoto(e.dataTransfer.files[0]);
      if (selecter == "albumInput") {
        dispatch(albumActions.setCover(e.dataTransfer.files[0]));
      }
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setPhoto(e.target.files[0]);
      if (selecter == "albumInput") {
        dispatch(albumActions.setCover(e.dataTransfer.files[0]));
      }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="row">
      <div className="col">
        <img
          className="img-thumbnail"
          src={photo ? URL.createObjectURL(photo) : photo}
          alt="No Image Selected"
        />
      </div>
      <div className="col">
        <form
          id="form-file-upload"
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : ""}
          >
            <div>
              <p>Drag and drop your file here or</p>
              <button className="upload-button" onClick={onButtonClick}>
                Upload a file
              </button>
            </div>
          </label>
          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </form>
      </div>
    </div>
  );
};
export default DragDropFile;
