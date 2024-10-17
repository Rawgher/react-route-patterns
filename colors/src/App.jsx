import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Colors from "./components/Colors";
import Color from "./components/Color";
import ColorForm from "./components/ColorForm";
import "./App.css";

function App() {
  const INITIAL_STATE = ["red", "green", "blue", "purple"];
  const [colors, setColors] = useState(INITIAL_STATE);

  const addColor = (newColor) => {
    setColors((colors) => [newColor.color, ...colors]);
  };

  const FilteredColor = () => {
    const { color } = useParams();
    const thisColor = colors.find(
      (c) => c.toLowerCase() === color.toLowerCase()
    );

    if (thisColor) {
      return <Color color={thisColor} />;
    } else {
      return <Navigate to="/colors" />;
    }
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<Colors colors={colors} />} />
            <Route path="/colors/:color" element={<FilteredColor />} />
            <Route
              path="/colors/new"
              element={<ColorForm addColor={addColor} />}
            />
            <Route path="*" element={<Navigate to="/colors" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
