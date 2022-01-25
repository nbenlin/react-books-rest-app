import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

const App = () => {
  const [data, setData] = useState([]);
  const [mainMenuId, setMainMenuId] = useState("");
  const [sidebarId, setSidebarId] = useState("");
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
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
      .then((data) => {
        setLoading(false);
        setData(data.items);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const fetchSelectedBooks = (subject) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=40&startIndex=21&key=${process.env.REACT_APP_API_KEY}`
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
        loading={loading}
      />
    </>
  );
};

export default App;
