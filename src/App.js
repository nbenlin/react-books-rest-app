import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

const App = () => {
  const [data, setData] = useState([]);

  const KEY = "AIzaSyDuPfWGUeEexwNBIlhsZHbaU6WpstVYHaI";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <>
      <Homepage books={data} />
    </>
  );
};

export default App;
