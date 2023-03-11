import React, { useRef } from "react";
import { FiTrash } from "react-icons/fi";
import { MdPhotoCameraBack } from "react-icons/md";
import { useBookContext } from "../../store/BookContext";

import "./FileUploadActions.scss";

const FileUploadActions = ({ setThumbnailImage, index, thumbnailImage }) => {
  const { dispatch } = useBookContext();
  const fileInputRef = useRef(null);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailImage(e.target.result);
        dispatch({
          type: "SET_BOOK_CURRENT_PREVIEW_IMAGE",
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    fileInputRef.current.files[0] &&
      dispatch({
        type: "SET_BOOK_FILES_TO_UPLOAD_INDEX",
        payload: { index, file: fileInputRef.current.files[0] },
      });
  }, [thumbnailImage]);

  return (
    <div className="file-upload-actions">
      <div>
        <MdPhotoCameraBack onClick={() => fileInputRef.current.click()} />
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept="image/*"
          name={`file_${index}`}
        />
      </div>
      <div>
        <FiTrash onClick={() => setThumbnailImage("")} />
      </div>
    </div>
  );
};

export default FileUploadActions;
