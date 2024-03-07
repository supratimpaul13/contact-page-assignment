import { useState, useEffect } from "react"; // Importing useState and useEffect hooks

// Component to validate email address
const ValidateEmail = ({ onEmailChange, onEmailValidityChange, resetFields }) => {
  // State to store email value and validity
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Function to validate email address
  const emailValidation = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    const isValidEmail = regex.test(emailValue); // Checking if email matches the pattern
    setIsValid(isValidEmail); // Updating validity state
    onEmailChange(emailValue); // Passing email value to parent component
    onEmailValidityChange(isValidEmail); // Passing validity state to parent component
  };

  // Effect to clear email field if resetFields changes to true
  useEffect(() => {
    if (resetFields) {
      setEmail(""); // Clearing email field
    }
  }, [resetFields]);

  // JSX structure for the component
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {/* Input field for email */}
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
        {/* Icon indicating email validity */}
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
      {/* Message indicating email validation result */}
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

export default ValidateEmail; // Exporting the component
