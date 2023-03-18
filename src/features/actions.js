export const baseURL = "http://localhost:3000";
export const uploads = "/api/upload";

export const uploadFiles = (payload, dispatch) => {
  // dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: true });
  const request = fetch(`${baseURL}${uploads}`, {
    method: "POST",
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.code === 200) {
        // dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: false });
      }
    })
    .catch((error) => {
      // dispatch({ type: "SET_BOOK_IMAGES_LOADING", payload: false });
      // dispatch({ type: "SET_BOOK_IMAGES_ERROR", payload: error });
    });
};
