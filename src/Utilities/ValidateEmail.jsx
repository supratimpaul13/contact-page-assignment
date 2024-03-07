import { useState, useEffect } from "react";

const ValidateEmail = ({ onEmailChange, onEmailValidityChange, resetFields }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const emailValidation = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regex.test(emailValue);
    setIsValid(isValidEmail);
    onEmailChange(emailValue); // Pass email value to parent
    onEmailValidityChange(isValidEmail); // Pass validity state to parent
  };

  useEffect(() => {
    if (resetFields) {
      setEmail(""); // Clear email field if resetFields changes to true
    }
  }, [resetFields]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <div className="input-field">
        <input
          type="text"
          id="email"
          className={
            email.length === 0
              ? "input-control fill-email"
              : isValid
              ? "input-control valid-email"
              : "input-control invalid-email"
          }
          placeholder="Email Address"
          autoComplete="off"
          onChange={emailValidation}
          value={email}
          required
        />
        <div
          className={
            email.length === 0
              ? "icon fill-color"
              : isValid
              ? "icon check-color"
              : "icon error-color"
          }
        >
          <i
            className={
              email.length === 0
                ? "fa-solid fa-exclamation-circle"
                : isValid
                ? "fa-solid fa-check-circle"
                : "fa-solid fa-xmark-circle"
            }
          ></i>
        </div>
      </div>
      <p
        className={
          email.length === 0
            ? "text-cautionmessage"
            : isValid
            ? "text-cautionmessage success-color"
            : "text-cautionmessage error-color"
        }
        style={{ margin: "0", fontWeight: "500" }}
      >
        {email.length === 0
          ? "Please fill in Email Address field"
          : isValid
          ? "The Email Address you entered is valid"
          : "Please enter a valid Email Address"}
      </p>
    </div>
  );
};

export default ValidateEmail;
