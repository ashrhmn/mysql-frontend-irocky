// import logo from './logo.svg';
import "./App.css";
import Books from "./components/Books";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loaded, setloaded] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setloaded(true);
      })
      .catch((error) => {
        console.log(error);
        setloaded(false);
      });
  }, []);
  return (
    <div className="App">
      {loaded ? <Books data={data} /> : <></>}
    </div>
  );
}

export default App;
