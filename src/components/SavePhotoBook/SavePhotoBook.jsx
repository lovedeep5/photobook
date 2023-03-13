import React from "react";
import { useBookContext } from "../../store/BookContext";
import { uploadFiles } from "../../features/actions";

const SavePhotoBook = () => {
  const { state, dispatch } = useBookContext();
  const handleSave = async () => {
    // TEST REMOVE IT
    const formData = new FormData();

    for (
      let index = 0;
      index < state.book.filesToUpload.files.length;
      index++
    ) {
      formData.append(
        `files`,
        state.book.filesToUpload.files[index],
        `file_${index}`
      );
    }

    formData.append("title", "test title");
    formData.append("size", { width: 800, height: 400 });
    formData.append("pages", 30);
    formData.append("email", "lovedeep5.abh@gmail.com");

    const response = await uploadFiles(formData, dispatch);

    console.log("response", response);
  };
  return (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SavePhotoBook;
