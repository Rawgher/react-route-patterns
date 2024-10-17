import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import AllDogs from "./components/AllDogs";
import Dog from "./components/Dog";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((d) => setDogs(d.dogs));
  }, []);

  const FilteredDog = () => {
    const { name } = useParams();
    const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

    if (dog) {
      return <Dog dog={dog} />;
    } else {
      return <Navigate to="/dogs" />;
    }
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/dogs" element={<AllDogs dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilteredDog />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
