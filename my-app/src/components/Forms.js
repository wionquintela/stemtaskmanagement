import Button from "./Button";
import { useState } from "react";

export default function Forms() {
  //ito yung functionalities ng mga buttons
  const addButtonClicked = () => {
    alert("Added new task.");
  };
  const deleteButtonClicked = () => {
    alert("deleted new task.");
  };

  //naglalagay tayo ng default state ng inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //function kung saan sinesave yung nilagay sa input
  function handleSubmit(e) {
    e.preventDefault();
    alert("The title of your task is: " + name);
    alert("Your description is: " + description);
    
  }

  return (
    <div className="container text-center">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title of your Task:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter the title of your task."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ border: "2px solid blue" }}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Task:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="enter the description of your task."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ border: "2px solid blue" }}
        ></textarea>
      </div>
      <Button name="Save" onClick={handleSubmit} />
      <Button name="Delete" onClick={deleteButtonClicked} />
    </div>
  );
}
