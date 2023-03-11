import React, { useState } from "react";
import FileUploadActions from "../FileUploadActions/FileUploadActions";
import { getResponsiveSize, getResponsiveThumbnailsSize } from "../../helpers";
import Thumbnails from "../Thumbnails/Thumbnails";
import "./CreateNewBook.scss";
import { useBookContext } from "../../store/BookContext";

const bookSpecifications = {
  size: { width: 800, height: 400 },
  pages: 5,
};

const { width, height } = getResponsiveSize({
  ...bookSpecifications.size,
  maxResponsiveWidth: "0.8",
});

const responsiveThumbnailsSize = getResponsiveThumbnailsSize(
  bookSpecifications.size
);

const addClasses = (index, bookImagesLength) => {
  switch (index) {
    case 0:
      return "cover-thumbnail";
    case 1:
      return "first-page-thumbnail";
    case bookImagesLength - 1:
      return "last-page-thumbnail";
    default:
      return "page";
  }
};

const CreateNewBook = () => {
  const { state, dispatch } = useBookContext();
  const bookImages = state?.book?.images;
  const bookImagesLength = bookImages?.length;
  const currentPreviewImage = state?.book?.currentPreviewImage;
  const [pagePreview, setPagePreview] = useState("");

  React.useEffect(() => {
    if (bookImagesLength) {
      setPagePreview(bookImages[0]);
    }
  }, [bookImagesLength, bookImages]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-new-book-container">
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
        {bookImages.length &&
          bookImages.map((image, index) => {
            const classes = addClasses(index, bookImagesLength);

            return (
              <Thumbnails
                classes={classes}
                image={image}
                size={responsiveThumbnailsSize}
                index={index}
                key={index}
                setPagePreview={setPagePreview}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CreateNewBook;
