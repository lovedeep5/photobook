import React, { useState, memo } from "react";
import { getResponsiveSize } from "../../helpers";
import Thumbnails from "../Thumbnails/Thumbnails";
import "./CreateNewBook.scss";
import { useBookContext } from "../../store/BookContext";
import Title from "../Title/Title";

const bookSpecifications = {
  size: { width: 800, height: 400 },
};

const { width, height } = getResponsiveSize({
  ...bookSpecifications.size,
  maxResponsiveWidth: "0.8",
});

const CreateNewBook = () => {
  const {
    state: {
      book: { currentPreviewImage: previewImage },
    },
  } = useBookContext();

  const [currentPreviewImage, setPreviewImage] = useState("");

  const handleThumbnailClick = React.useCallback((image) => {
    setPreviewImage(URL.createObjectURL(image));
  }, []);

  React.useEffect(() => {
    setPreviewImage(previewImage);
  }, [previewImage]);

  return (
    <div className="create-new-book-container">
      <Title />

      <div className="page-view-container">
        <div
          className="page-view"
          style={{
            width,
            height,
            maxWidth: "80%",
            backgroundImage: `url(${currentPreviewImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
      <div className="book-thumbnails">
        <Thumbnails handleThumbnailClick={handleThumbnailClick} />
      </div>
    </div>
  );
};

export default memo(CreateNewBook);
