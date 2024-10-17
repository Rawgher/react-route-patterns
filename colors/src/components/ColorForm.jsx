import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ColorForm.css";

function ColorForm({ addColor }) {
  const INITIAL_STATE = { color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData(INITIAL_STATE);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit} className="ColorForm">
      <label htmlFor="color">Enter Your Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add Color</button>
    </form>
  );
}

export default ColorForm;
