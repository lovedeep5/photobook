import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";

import { useBookContext } from "../../store/BookContext";

const Title = () => {
  const { dispatch } = useBookContext();
  const [titleEditing, setTitleEditing] = useState(false);
  const [title, setTitle] = useState("");

  const handTitleDoubleClick = () => {
    setTitleEditing(true);
  };

  const handleTitleEditing = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setTitleEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value.toLowerCase());
  };

  React.useEffect(() => {
    !titleEditing &&
      dispatch({
        type: "SET_BOOK_TITLE",
        payload: title,
      });
  }, [titleEditing]);

  return (
    <div className="titleEditingContainer">
      {titleEditing ? (
        <div className="titleEditing">
          <input
            type="text"
            className="titleEditingInput"
            onBlur={() => setTitleEditing(false)}
            onKeyUp={handleTitleEditing}
            placeholder="Type Something..."
            onChange={handleInputChange}
            value={title}
          />
        </div>
      ) : (
        <p style={{ textAlign: "center", display: "block" }}>
          {title.toUpperCase() || "Untitled"}{" "}
          <BiPencil onClick={handTitleDoubleClick} />
        </p>
      )}
    </div>
  );
};

export default Title;
