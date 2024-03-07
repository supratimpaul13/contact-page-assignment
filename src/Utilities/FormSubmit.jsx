// FormSubmit.js

import axios from "axios"; // Importing Axios for HTTP requests

// Function to handle form submission
const handleSubmit = (data, onSuccess) => {
  // Sending POST request to Google Sheets API endpoint
  axios
    .post(
      "https://sheet.best/api/sheets/9707fd63-a047-4359-8ca7-d861b8fe2cd0", // Google Sheets API endpoint
      data // Data to be submitted
    )
    .then((response) => {
      // Logging response and calling onSuccess callback upon successful submission
      console.log("Response: ", response);
      onSuccess();
    })
    .catch((error) => {
      // Logging error in case of failure
      console.error("Error: ", error);
    });
};

export default handleSubmit; // Exporting the function for use in other components
