import { Link } from "react-router-dom";
import "./AllDogs.css";

function AllDogs({ dogs }) {
  return (
    <div className="AllDogs">
      <h1>All Dogs</h1>
      <div className="AllDogs-div">
        {dogs.map((dog) => (
          <div className="AllDogs-card" key={dog.name}>
            <p>Name: {dog.name}</p>
            <p>Age: {dog.age}</p>
            <p>Facts about {dog.name}:</p>
            <ul className="AllDogs-facts">
              {dog.facts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
            <Link to={`/dogs/${dog.name}`}>
              <button>View Dog</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDogs;
