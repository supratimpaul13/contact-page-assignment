import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";

const ValidatePhoneNumber = ({
  onPhoneNumberChange,
  onPhoneNumberValidityChange,
  resetFields,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cautionMessage, setCautionMessage] = useState("");

  const phoneNumberValidation = (e) => {
    let pattern = /^\d{10}$/;
    let phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
    if (phoneNumberValue.match(pattern)) {
      setCautionMessage(true);
      onPhoneNumberValidityChange(true); // Pass validity state to parent
    } else {
      setCautionMessage(false);
      onPhoneNumberValidityChange(false); // Pass validity state to parent
    }
    onPhoneNumberChange(phoneNumberValue); // Pass phone number value to parent
  };

  useEffect(() => {
    if (resetFields) {
      setPhoneNumber(""); // Clear email field if resetFields changes to true
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
          id="phoneNumber"
          className={
            phoneNumber.length === 0
              ? "input-control fill-phoneNumber"
              : cautionMessage
              ? "input-control valid-phoneNumber"
              : "input-control invalid-phoneNumber"
          }
          placeholder="10-Digit Phone Number"
          autoComplete="off"
          onChange={phoneNumberValidation}
          value={phoneNumber}
          required
        />
        <div
          className={
            phoneNumber.length === 0
              ? "icon fill-color"
              : cautionMessage
              ? "icon check-color"
              : "icon error-color"
          }
        >
          <i
            className={
              phoneNumber.length === 0
                ? "fa-solid fa-exclamation-circle"
                : cautionMessage
                ? "fa-solid fa-check-circle"
                : "fa-solid fa-xmark-circle"
            }
          ></i>
        </div>
      </div>
      <p
        className={
          phoneNumber.length === 0
            ? "text-cautionmessage"
            : cautionMessage
            ? "text-cautionmessage success-color"
            : "text-cautionmessage error-color"
        }
        style={{ margin: "0", fontWeight: "500" }}
      >
        {phoneNumber.length === 0
          ? "Please fill in 10 digit Phone Number field"
          : cautionMessage
          ? "The Number you entered is valid"
          : "The Number you entered is invalid"}
      </p>
    </div>
  );
};

export default ValidatePhoneNumber;
