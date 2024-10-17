import { Link } from "react-router-dom";
import "./Dog.css";

function Dog({ dog }) {
  return (
    <div className="Dog" key={dog.name}>
      <h1>{dog.name}</h1>
      <div className="Dog-div">
        <p>Age: {dog.age}</p>
        <p>Facts about {dog.name}:</p>
        <ul className="Dog-facts">
          {dog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
        <Link to={"/dogs"}>
          <button>Back to All Dogs</button>
        </Link>
      </div>
    </div>
  );
}

export default Dog;
