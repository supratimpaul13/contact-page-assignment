import { useState } from "react";
import handleSubmit from "./Utilities/FormSubmit"; // Importing the function to handle form submission
import "./App.css"; // Importing CSS file for styling
import "./assets/fontawesome-6.1.1/css/all.min.css"; // Importing FontAwesome for icons
import ValidateEmail from "./Utilities/ValidateEmail"; // Importing component to validate email
import ValidatePhoneNumber from "./Utilities/ValidatePhone"; // Importing component to validate phone number
import Lottie from "lottie-react"; // Importing Lottie for animations
import animationData from "./assets/Animation - 1709800101299.json"; // Importing animation data
import MyContactInfo from "./Utilities/myContactInfo"; // Importing component to display contact information

function App() {
  // States for form fields and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [resetFields, setResetFields] = useState(false);

  // Function to handle email input change
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  // Function to handle email validation change
  const handleEmailValidityChange = (isValid) => {
    setIsEmailValid(isValid);
  };

  // Function to handle phone number input change
  const handlePhoneNumberChange = (value) => {
    setNumber(value);
  };

  // Function to handle phone number validation change
  const handlePhoneNumberValidityChange = (isValid) => {
    setIsPhoneNumberValid(isValid);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Checking if email and phone number are valid before submission
    if (isEmailValid && isPhoneNumberValid) {
      // Creating data object to be submitted
      const data = {
        Name: name,
        Email: email,
        Phone: number,
        Message: message,
      };

      // Handling form submission
      handleSubmit(data, () => {
        // Resetting form fields after successful submission
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setResetFields(true);
      });
    } else {
      console.log("Invalid phone number or email. Please check your inputs.");
    }
  };

  // JSX structure for the component
  return (
    <>
      <div className="canvas">
        <div className="gooey1"></div> {/* Placeholder div */}

        {/* Left side of the page with form */}
        <div className="left">
          <h1>Contact Page</h1>
          <form
            className="form-group"
            onSubmit={handleFormSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* Input field for name */}
            <div className="input-field">
              <input
                type="text"
                className="input-control"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <br />

            {/* Component for validating email */}
            <ValidateEmail
              onEmailChange={handleEmailChange}
              onEmailValidityChange={handleEmailValidityChange}
              resetFields={resetFields}
            />
            <br />

            {/* Component for validating phone number */}
            <ValidatePhoneNumber
              onPhoneNumberChange={handlePhoneNumberChange}
              onPhoneNumberValidityChange={handlePhoneNumberValidityChange}
              resetFields={resetFields}
            />
            <br />

            {/* Input field for message */}
            <div className="input-field">
              <input
                type="text"
                className="input-control"
                placeholder="Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <br />

            {/* Submit button */}
            <div className="Submit-btn">
              <button type="submit" className="button"> <span> Send </span> </button>
            </div>
          </form>
        </div>

        {/* Right side of the page with animation and contact info */}
        <div className="right">
          <div className="profile-card">
            {/* Animation component */}
            <Lottie animationData={animationData} />
          </div>
          {/* Contact info component */}
          <MyContactInfo />
        </div>
      </div>
    </>
  );
}

export default App;
