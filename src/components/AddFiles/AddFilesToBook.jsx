import React, { useState, useRef } from "react";
import { useBookContext } from "../../store/BookContext";
import { GiFiles } from "react-icons/gi";
import "./AddFilesToBook.scss";

const AddFilesToBook = () => {
  const { dispatch, state } = useBookContext();
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  const handleAddFiles = (e) => {
    dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: true });
    const files = e.target.files;
    const newImages = [];
    for (let file of files) {
      newImages.push(file);
    }
    dispatch({
      type: "SET_BOOK_IMAGES",
      payload: newImages,
    });
    dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: false });

    dispatch({
      type: "SET_BOOK_CURRENT_PREVIEW_IMAGE",
      payload: URL.createObjectURL(files[0]),
    });
  };
  const handleAddFilesClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="addFilesContainer">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleAddFiles}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <button onClick={handleAddFilesClick}>
        <GiFiles className="addFilesIcon" /> <span>Add Files</span>
      </button>
    </div>
  );
};

export default AddFilesToBook;
