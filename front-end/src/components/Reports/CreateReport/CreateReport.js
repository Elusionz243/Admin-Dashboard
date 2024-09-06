import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateReport.scss";

export default function CreateReport() {
  const initialFormData = {
    name: "",
    category: "",
    questions: [],
  };

  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [formState, setFormState] = useState(0);
  const [formData, setFormData] = useState({ ...initialFormData });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setListOfQuestions([]);
    setFormState(0);
    navigate("/reports");
  };

  const incrementFormState = (event) => {
    event.preventDefault();
    setFormState((previous) => (previous += 1));
  };

  const decrementFormState = (event) => {
    event.preventDefault();
    setFormState((previous) => (previous -= 1));
  };

  const addQuestion = (event) => {
    const value = event.target.value;
    const questionElement = (
      <div key={value} className="Question">
        <label htmlFor="question-title" className="form-label">
          Question title
        </label>
        <input type={value} id="question-title" className="form-control" />
      </div>
    );
    setListOfQuestions([...listOfQuestions, questionElement]);
  };

  const handleFormDataChange = (event) => {
    const target = event.target;
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };

  return (
    <div className="CreateReport">
      <div className="CreateReport-container">
        <h1 className="CreateReport-title">Create a Report!</h1>
        <form onSumbit={handleSubmit} className="CreateReport-fields">
          {formState === 0 && (
            <div>
              <label htmlFor="report-name" className="form-label">
                Report Name
              </label>
              <input
                type="text"
                id="report-name"
                name="name"
                className="form-control"
                onChange={handleFormDataChange}
                value={formData.name}
              />
            </div>
          )}
          {formState === 1 && (
            <div>
              <label htmlFor="Question-select" className="form-label">
                Select what type of question to add
              </label>
              <select
                id="Question-select"
                onChange={addQuestion}
                className="form-select"
              >
                <option selected hidden>
                  Add a New Question
                </option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="password">Password</option>
              </select>
              {listOfQuestions.length !== 0 && listOfQuestions}
            </div>
          )}

          <div className="form-buttons">
            <button onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
            {formState !== 0 && (
              <button
                onClick={decrementFormState}
                className="btn btn-secondary"
              >
                Back
              </button>
            )}
            <button onClick={incrementFormState} className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
