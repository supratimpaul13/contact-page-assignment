import { useState } from "react";
import handleSubmit from "./Utilities/FormSubmit";
import "./App.css";
import "./assets/fontawesome-6.1.1/css/all.min.css";
import ValidateEmail from "./Utilities/ValidateEmail";
import ValidatePhoneNumber from "./Utilities/ValidatePhone";
import Lottie from "lottie-react";
import animationData from "./assets/Animation - 1709800101299.json";
import MyContactInfo from "./Utilities/myContactInfo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [resetFields, setResetFields] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleEmailValidityChange = (isValid) => {
    setIsEmailValid(isValid);
  };

  const handlePhoneNumberChange = (value) => {
    setNumber(value);
  };

  const handlePhoneNumberValidityChange = (isValid) => {
    setIsPhoneNumberValid(isValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid && isPhoneNumberValid) {
      const data = {
        Name: name,
        Email: email,
        Phone: number,
        Message: message,
      };

      handleSubmit(data, () => {
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

  return (
    <>
      <div className="canvas">
        <div className="gooey1"></div>

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
            <ValidateEmail
              onEmailChange={handleEmailChange}
              onEmailValidityChange={handleEmailValidityChange}
              resetFields={resetFields}
            />
            <br />
            <ValidatePhoneNumber
              onPhoneNumberChange={handlePhoneNumberChange}
              onPhoneNumberValidityChange={handlePhoneNumberValidityChange}
              resetFields={resetFields}
            />
            <br />
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
            <div className="Submit-btn">
              <button type="submit" className="button"> <span> Send </span> </button>
            </div>
          </form>
        </div>

        <div className="right">
          <div className="profile-card">
            <Lottie animationData={animationData} />
          </div>
          <MyContactInfo />
        </div>
      </div>
    </>
  );
}

export default App;
