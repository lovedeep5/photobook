import React from "react";
import { useBookContext } from "../../store/BookContext";

const AddFilesToBook = () => {
  const { dispatch, state } = useBookContext();

  const handleAddFiles = (e) => {
    dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: true });
    const files = e.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);
        dispatch({ type: "SET_BOOK_IMAGES", payload: images });
        i === 0 &&
          dispatch({
            type: "SET_BOOK_CURRENT_PREVIEW_IMAGE",
            payload: e.target.result,
          });
      };
      reader.readAsDataURL(file);
      dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: false });
    }

    dispatch({ type: "SET_BOOK_FILES_TO_UPLOAD", payload: files });
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleAddFiles} />
    </div>
  );
};

export default AddFilesToBook;
