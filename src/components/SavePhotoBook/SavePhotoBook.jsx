import React from "react";
import { useBookContext } from "../../store/BookContext";
import { uploadFiles } from "../../features/actions";
import { AiFillSave } from "react-icons/ai";
import "./SavePhotoBook.scss";

const formData = new FormData();

const SavePhotoBook = () => {
  const { state, dispatch } = useBookContext();

  const handleSave = async () => {
    // TEST REMOVE IT

    for (let index = 0; index < state.book.images.files.length; index++) {
      formData.append(`files`, state.book.images.files[index], `file_${index}`);
    }

    const config = {
      title: state?.book?.title,
      size: { width: 800, height: 400 },
      pages: state.book.images.files.length,
      email: "lovedeep5.abh@gmail.com",
    };

    const configString = JSON.stringify(config);

    formData.append("config", configString);
    uploadFiles(formData, dispatch);
  };

  return (
    <div className="saveContainer">
      <button onClick={handleSave}>
        <AiFillSave className="icon" /> Save
      </button>
    </div>
  );
};

export default React.memo(SavePhotoBook);
