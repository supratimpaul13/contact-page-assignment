# React Contact Page Project

This project consists of several JavaScript files that collectively create a contact page in a React application. Below is a brief overview of each file:

## App.jsx

- **Description**: This is the main component of the project. It renders the form for users to input their contact information and displays the contact information section.
- **Features**:
  - Allows users to input their name, email address, phone number, and a message.
  - Handles form submission and sends the data to a specified API endpoint using Axios.
  - Displays contact information using radio buttons for different platforms like Instagram, LinkedIn, GitHub, and Portfolio.
- **Dependencies**: 
  - React
  - useState and useEffect hooks from React
  - Lottie for animation rendering
- **Components Used**: 
  - ValidateEmail: Component for validating email input
  - ValidatePhoneNumber: Component for validating phone number input
  - MyContactInfo: Component for displaying contact information

## FormSubmit.js

- **Description**: This file contains the logic for handling form submission. It uses Axios to make a POST request to a specified API endpoint with the form data.
- **Features**:
  - Exports a function `handleSubmit` that takes form data and a callback function `onSuccess`.
  - Makes a POST request using Axios to the specified API endpoint.
  - Calls the `onSuccess` callback function upon successful form submission.
- **Dependencies**: 
  - Axios

## ValidateEmail.jsx

- **Description**: This component handles email input validation. It checks whether the entered email address is in a valid format using regular expressions.
- **Features**:
  - Validates email input using regular expressions.
  - Displays validation status to the user in real-time.
- **Dependencies**: 
  - useState hook from React

## ValidatePhoneNumber.jsx

- **Description**: This component handles phone number input validation. It checks whether the entered phone number is in a valid format using regular expressions.
- **Features**:
  - Validates phone number input using regular expressions.
  - Displays validation status to the user in real-time.
- **Dependencies**: 
  - useState hook from React

## MyContactInfo.jsx

- **Description**: This component displays contact information using radio buttons. Each radio button corresponds to a different platform, such as Instagram, LinkedIn, GitHub, and Portfolio.
- **Features**:
  - Displays contact information using radio buttons.
  - Allows users to click on the radio buttons to navigate to the respective platform.
- **Dependencies**: 
  - None

## Google Sheets Integration

The form data submitted by users is sent to a Google Sheets spreadsheet for storage and retrieval. This integration is achieved by making a POST request to a specific Google Sheets API endpoint from the `FormSubmit.js` file. The `handleSubmit` function in `FormSubmit.js` sends the form data to this API endpoint, which then stores the data in the Google Sheets spreadsheet.
