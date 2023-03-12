import React, { createContext, useContext, useReducer } from "react";

const book = {
  size: { width: 800, height: 400 },
  pages: 5,
  images: [
    "https://picsum.photos/800/400?peoples1",
    "https://picsum.photos/400/400?peoples2",
    "https://picsum.photos/800/400?peoples3",
    "https://picsum.photos/800/400?peoples4",
    "https://picsum.photos/800/400?peoples5",
    "https://picsum.photos/800/400?peoples6",
    "https://picsum.photos/800/400?peoples7",
    "https://picsum.photos/400/400?peoples8",
  ],
};

const BookContextWrapper = createContext();

const initialState = {
  book: {
    id: "",
    title: "",
    size: { width: 800, height: 400 },
    pages: 5,
    images: { files: [], loading: false, error: null },
    filesToUpload: { files: [], loading: false, error: null },
    currentPreviewImage: "",
  },
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_BOOK":
      return {
        ...state,
        book: payload,
      };
    case "SET_BOOK_ID":
      return {
        ...state,
        book: {
          ...state.book,
          id: payload,
        },
      };
    case "SET_BOOK_TITLE":
      return {
        ...state,
        book: {
          ...state.book,
          title: payload,
        },
      };
    case "SET_BOOK_SIZE":
      return {
        ...state,
        book: {
          ...state.book,
          size: payload,
        },
      };
    case "SET_BOOK_PAGES":
      return {
        ...state,
        book: {
          ...state.book,
          pages: payload,
        },
      };
    case "SET_BOOK_IMAGES_LOADING":
      return {
        ...state,
        book: {
          ...state.book,
          images: { ...state.book.images, loading: payload },
        },
      };
    case "SET_BOOK_IMAGES_ERROR":
      return {
        ...state,
        book: {
          ...state.book,
          images: { ...state.book.images, error: payload },
        },
      };

    case "SET_BOOK_IMAGES":
      return {
        ...state,
        book: {
          ...state.book,
          images: {
            ...state.book.images,
            files: payload,
            error: null,
            loading: false,
          },
        },
      };
    case "SET_BOOK_FILES_TO_UPLOAD":
      return {
        ...state,
        book: {
          ...state.book,
          filesToUpload: { ...state.filesToUpload, files: payload },
        },
      };

    case "SET_BOOK_FILES_TO_UPLOAD_INDEX":
      const updatedFilesToUpload = [...state?.book?.filesToUpload.files];
      updatedFilesToUpload[payload.index] = payload.file;
      return {
        ...state,
        book: {
          ...state?.book,
          filesToUpload: {
            ...state.book.filesToUpload,
            files: updatedFilesToUpload,
          },
        },
      };

    case "SET_BOOK_CURRENT_PREVIEW_IMAGE":
      return {
        ...state,
        book: {
          ...state.book,
          currentPreviewImage: payload,
        },
      };

    default:
      return state;
  }
};

const BookContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookContextWrapper.Provider value={{ state, dispatch }}>
      {children}
    </BookContextWrapper.Provider>
  );
};

export default BookContext;

export const useBookContext = () => useContext(BookContextWrapper);
