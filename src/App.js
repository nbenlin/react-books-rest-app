import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

const App = () => {
  const [data, setData] = useState([]);
  const [mainMenuId, setMainMenuId] = useState("");
  const [sidebarId, setSidebarId] = useState("");

  useEffect(() => {
    fetchDataHandler();
  }, [mainMenuId, sidebarId]);

  const menuClickHandler = (menuName) => {
    setMainMenuId(menuName);
  };

  const sidebarClickHandler = (sidebarName) => {
    setSidebarId(sidebarName);
  };

  const fetchDataHandler = (textToFilter) => {
    const filterText = textToFilter;
    if (mainMenuId.length > 0) {
      if (mainMenuId === "daily") {
        fetchSelectedBooks("love");
      }
      if (mainMenuId === "newReleases") {
        fetchSelectedBooks("feminism");
      }
      if (mainMenuId === "topAuthors") {
        fetchSelectedBooks("drama");
      }
      if (filterText === "bestsellers") {
        fetchSelectedBooks("inspirational");
      }
    }
    if (sidebarId) {
      fetchSelectedBooks(sidebarId);
    }
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${filterText}&orderBy=newest&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((err) => console.log("Error: ", err));
  };

  const fetchSelectedBooks = (subject) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&startIndex=54&maxResults=6`
    )
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <>
      <Homepage
        filterHandler={fetchDataHandler}
        books={data}
        menuClickHandler={menuClickHandler}
        sidebarClickHandler={sidebarClickHandler}
      />
    </>
  );
};

export default App;
