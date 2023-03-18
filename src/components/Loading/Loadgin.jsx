import React from "react";
import { ImSpinner6 } from "react-icons/im";
import { useBookContext } from "../../store/BookContext";
import "./Loadigin.scss";

const Loadgin = () => {
  const { state } = useBookContext();
  const { loading } = state.book;
  if (!loading) return null;
  return (
    <div className="loadingScreen">
      <ImSpinner6 className="loadingIcon" />
    </div>
  );
};

export default Loadgin;
