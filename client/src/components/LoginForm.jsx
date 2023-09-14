import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css";

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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

  const navigate = useNavigate();

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);

      console.log('Token:', data.login.token);

      // Update authentication status after successful login
      Auth.setAuthStatus(true);
      console.log('User Authenticated');
      // Use navigate to redirect to the /home route
      navigate("/");

    } catch (error) {
      console.error(error);
    }

    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleFormSubmit} noValidate>
        {/* email */}
        <div className="login-email">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={userFormData.email}
            onChange={handleInputChange}
            required
          />
          {validated && !userFormData.email && (
            <div className="alert">Email address is required!</div>
          )}
        </div>
        {/* password */}
        <div className="login-password">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={userFormData.password}
            onChange={handleInputChange}
            required
          />
          {validated && !userFormData.password && (
            <div className="alert">Password is required!</div>
          )}
        </div>
        {/* login button */}
        <div className="login-button-container">
          <button type="submit">LOGIN</button>
        </div>
        <div>
          <Link to="/signup" className="signup-link">
            sign up
          </Link>
        </div>
      </form>
      {/* alert */}
      {showAlert && <div className="alert">Something went wrong!</div>}
    </div>
  );
};

export default Login;
