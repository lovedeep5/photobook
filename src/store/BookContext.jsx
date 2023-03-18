import React, { createContext, useContext, useReducer } from "react";
const BookContextWrapper = createContext();

const initialState = {
  book: {
    id: "",
    title: "",
    size: { width: 800, height: 400 },
    pages: 5,
    images: { files: [], loading: false, error: null },
    currentPreviewImage: "",
    loading: false,
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

    case "DELETE_BOOK_IMAGE":
      return {
        ...state,
        book: {
          ...state.book,
          images: {
            ...state.book.images,
            files: state.book.images.files.filter(
              (image, index) => index !== payload
            ),
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

    case "LOADING":
      return {
        ...state,
        book: {
          ...state.book,
          loading: payload,
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
