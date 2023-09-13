import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../assets/css/SignUpForm.css";

const SignUpForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated, setValidated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  // use mutation for adding user
  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // validate form
    setValidated(true);

    try {
      console.log({ ...userFormData });
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    // clear form values
    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleFormSubmit} noValidate>
        <div className="signup-inputs">
          <div className="signup-user-name">
            {/* first name */}
            <div className="signup-first-name">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                name="firstName"
                value={userFormData.firstName}
                onChange={handleInputChange}
                required
              />
              {validated && !userFormData.firstName && (
                <div className="alert">First name is required!</div>
              )}
            </div>
            {/* last name */}
            <div className="signup-last-name">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                name="lastName"
                value={userFormData.lastName}
                onChange={handleInputChange}
                required
              />
              {validated && !userFormData.firstName && (
                <div className="alert">Last name is required!</div>
              )}
            </div>
          </div>
          <div className="signup-user-credentials">
            {/* email */}
            <div className="signup-email">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                value={userFormData.email}
                onChange={handleInputChange}
                required
              />
              {validated && !userFormData.firstName && (
                <div className="alert">Email address is required!</div>
              )}
            </div>
            {/* password */}
            <div className="signup-password">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                value={userFormData.password}
                onChange={handleInputChange}
                required
              />
              {validated && !userFormData.firstName && (
                <div className="alert">Password is required!</div>
              )}
            </div>
          </div>
        </div>
        {/* sign up button */}
        <div className="signup-button-container">
          <button type="submit">SIGN UP</button>
        </div>
      </form>
      {/* alert */}
      {showAlert && <div className="alert">Something went wrong!</div>}
      <div>
        {/* link to login page */}
        <Link to="/login" className="login-link">
          login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
