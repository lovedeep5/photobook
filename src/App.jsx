import "./App.css";
import AddFilesToBook from "./components/AddFiles/AddFilesToBook";
import CreateNewBook from "./components/CreateNewBook/CreateNewBook";
import BookContext from "./store/BookContext";

function App() {
  return (
    <BookContext>
      <div className="App">
        <AddFilesToBook />
        <p style={{ textAlign: "center", display: "block" }}>TEST PROJECT</p>
        <CreateNewBook />
      </div>
    </BookContext>
  );
}

export default App;
