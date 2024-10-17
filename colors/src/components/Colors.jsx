import { Link } from "react-router-dom";
import "./Colors.css";

function Colors({ colors }) {
  return (
    <div className="Colors">
      <h1>Here are all of our colors</h1>

      <div className="Colors-div">
        <p>Choose a color</p>

        <div className="Colors-holder">
          {colors.map((color) => (
            <Link to={`/colors/${color}`} key={color}>
              <div className="Colors-single" style={{ backgroundColor: color }}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </div>
            </Link>
          ))}
        </div>

        <Link to="/colors/new">
          <button className="Colors-btn">Add A Color</button>
        </Link>
      </div>
    </div>
  );
}

export default Colors;
