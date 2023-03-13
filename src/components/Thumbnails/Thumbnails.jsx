import React, { useState } from "react";
import FileUploadActions from "../FileUploadActions/FileUploadActions";
import { useBookContext } from "../../store/BookContext";
import "./Thumbnails.scss";

const Thumbnails = ({ classes, image, size, index }) => {
  const [thumbnailImage, setThumbnailImage] = useState(image);
  const { dispatch } = useBookContext();

  return (
    <div
      draggable
      onClick={() =>
        dispatch({
          type: "SET_BOOK_CURRENT_PREVIEW_IMAGE",
          payload: thumbnailImage,
        })
      }
      className={classes}
      style={{
        width: size.width,
        height: size.height,
        backgroundImage: 'url("' + thumbnailImage + '")',
        flexShrink: 0,
      }}
    >
      <FileUploadActions
        setThumbnailImage={setThumbnailImage}
        index={index}
        thumbnailImage={thumbnailImage}
      />
    </div>
  );
};

export default Thumbnails;
