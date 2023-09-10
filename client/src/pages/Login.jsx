import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    // manages email and password fields
    const [formState, setFormState] = useState({ email: '', password: '' });
    // calls the LOGIN_USER mutation, destructured error and data to be able to access them
    const [login, { error, data }] = useMutation(LOGIN_USER); //need to add error function below
    // handles input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        //  merges current value with the new value that was inputted into name
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    // form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(formState); - use to check if formState is being detected
        try {
            // start the login mutation with inputted values (email and password) from formState
            const { data } = await login({
                variables: { ...formState },
            });
            // if auth works it will log in the user with auth token from mutation result
            Auth.login(data.login.token);
        } catch (event) {
            console.error(event);
        }

        // clears form fields after form is submitted
        setFormState({
            email: '',
            password: '',
        });
    };

    // conditional returns different blocks depending if a login was attempted or not, is there data or not? If there is data you get a message and are redirected to the root URL. As long as there is no data, it will show the login form.
    return (
        <main>
            <div className="card">
                <h4 className="card-header">Sign Up</h4>
                <div className="card-body">
                    {data ? (
                        <p>Why did that take so long? You should be redirected to the home page.</p>
                    ) : (
                        <form on Submit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button
                                className="button"
                                style={{ cursor: 'pinter' }}
                                type="submit"
                            >Login</button>
                        </form>
                    )}
                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Login;