import React from "react";
import { FiTrash } from "react-icons/fi";
import { MdPhotoCameraBack } from "react-icons/md";
import { useBookContext } from "../../store/BookContext";

import "./FileUploadActions.scss";

const FileUploadActions = ({ index }) => {
  const { dispatch } = useBookContext();

  const handleTrashClick = () => {
    dispatch({ type: "DELETE_BOOK_IMAGE", payload: index });
  };
  return (
    <div className="file-upload-actions">
      <div>
        <FiTrash onClick={handleTrashClick} />
      </div>
    </div>
  );
};

export default FileUploadActions;
