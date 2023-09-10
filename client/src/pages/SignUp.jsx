// INCLUDES:
//          - LoginHeader.jsx
//          - SignUpForm.jsx
//
//
//
//
//
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="signupform">
            <div className="card">
                <h3 className="header">Sign Up</h3>
                <div>
                    {data ? (
                        <p>That worked! You should be redirected to the home page.</p>
                    ) : (
                        <form onSubit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="First Name"
                                name="firstName"
                                type="text"
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Last Name"
                                name="lastName"
                                type="text"
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="password"
                                name="password"
                                type="password"
                                value={formState.name}
                                onChange={handleChange}
                            />
                            <button
                                className="form-btn"
                                type="submit"
                            >Sign Up</button>
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