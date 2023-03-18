import React, { useState, memo } from "react";
import FileUploadActions from "../FileUploadActions/FileUploadActions";
import { useBookContext } from "../../store/BookContext";
import { getResponsiveThumbnailsSize } from "../../helpers";

import "./Thumbnails.scss";

const bookSpecifications = {
  size: { width: 800, height: 400 },
};

const size = getResponsiveThumbnailsSize(bookSpecifications.size);

const Thumbnails = ({ handleThumbnailClick }) => {
  const {
    dispatch,
    state: {
      book: {
        images: { files },
      },
    },
  } = useBookContext();
  const [bookImages, setBookImages] = useState([]);

  React.useEffect(() => {
    setBookImages(files || []);
  }, [files]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("index");

    if (oldIndex !== index) {
      handleImageDrag(oldIndex, index);
    }
  };

  const handleImageDrag = (index, newPosition) => {
    const newImages = [...files];
    const [removed] = newImages.splice(index, 1);
    newImages.splice(newPosition, 0, removed);
    dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: true });
    dispatch({
      type: "SET_BOOK_IMAGES",
      payload: newImages,
    });
    dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: false });
    setBookImages(newImages);
  };

  return (
    <>
      {bookImages.length &&
        bookImages.map((image, index) => {
          return (
            <div
              key={index}
              className="thumbnail"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              style={{
                ...size,
                backgroundImage: `url(${URL.createObjectURL(image)})`,
              }}
              onClick={() => handleThumbnailClick(image)}
            >
              {/* <img src={} alt={image.name} /> */}
              <FileUploadActions index={index} setBookImages={setBookImages} />
            </div>
          );
        })}
    </>
  );
};

export default memo(Thumbnails);
