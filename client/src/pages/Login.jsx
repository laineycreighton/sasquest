import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    // manages email and password fields
    const [formState, setFormState] = useState({ email: '', password: '' });
    // calls the LOGIN_USER mutation, destructured error and data to be able to access them
    const [login, { error, data }] = useMutation(LOGIN_USER);
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
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (event) {
            console.error(event);
        }

        // clears form values after form has been submitted
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div className="card">
                <h4 className="card-header">Sign Up</h4>
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
{/* add in error here */}
            </div>
        </main>
    );
};

export default Login;