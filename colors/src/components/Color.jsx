import { Link } from "react-router-dom";
import "./Color.css";

function Color({ color }) {
  return (
    <div className="Color" style={{ backgroundColor: color }}>
      <p>You chose:</p>
      <h1>{color.toUpperCase()}</h1>
      <Link to="/colors">
        <button className="Color-btn">Back to All Colors</button>
      </Link>
    </div>
  );
}

export default Color;
