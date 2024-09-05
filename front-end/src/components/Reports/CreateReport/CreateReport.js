import { useState } from "react";
import "./CreateReport.scss";

export default function CreateReport() {
  const [listOfQuestions, setListOfQuestions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
  };

  const addQuestion = (event) => {
    const value = event.target.value;
    setListOfQuestions([...listOfQuestions, value]);
  };

  return (
    <div className="CreateReport">
      <div className="CreateReport-container">
        <h1 className="CreateReport-title">Create a Report!</h1>
        <form onSumbit={handleSubmit} className="CreateReport-fields">
          <div>
            <label htmlFor="report-name" className="form-label">
              Report Name
            </label>
            <input type="text" id="report-name" className="form-control" />
          </div>
          <div>
            {listOfQuestions.length === 0 ? (
              <select onChange={addQuestion} className="form-select">
                <option selected hidden>
                  Add a New Question
                </option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="password">Password</option>
              </select>
            ) : (
              listOfQuestions.map((question) => (
                <div className="Question">
                  <label htmlFor="question-title" className="form-label">
                    Question title
                  </label>
                  <input id="question-title" className="form-control" />
                  {/* TODO: Figure out how to handle question generation for new questions. 
                  Make the Create a Question button stay on screen */}
                </div>
              ))
            )}
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
            <button onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
