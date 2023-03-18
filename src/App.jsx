import "./App.css";
import AddFilesToBook from "./components/AddFiles/AddFilesToBook";
import CreateNewBook from "./components/CreateNewBook/CreateNewBook";
import Loadgin from "./components/Loading/Loadgin";
import BookContext from "./store/BookContext";
import SavePhotoBook from "./components/savePhotoBook/savePhotoBook";

function App() {
  return (
    <BookContext>
      <Loadgin />
      <div className="App">
        <AddFilesToBook />
        <div className="save">
          <SavePhotoBook />
        </div>
        <CreateNewBook />
      </div>
    </BookContext>
  );
}

export default App;
