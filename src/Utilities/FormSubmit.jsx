// FormSubmit.js

import axios from "axios";

const handleSubmit = (data, onSuccess) => {
  axios
    .post(
      "https://sheet.best/api/sheets/9707fd63-a047-4359-8ca7-d861b8fe2cd0",
      data
    )
    .then((response) => {
      console.log("Response: ", response);
      onSuccess();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

export default handleSubmit;
