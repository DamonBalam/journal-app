import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Arturo',
        email: 'damon@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName( email,password, name ) )
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password shout be at least 6 characters and match each other'));

            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title mb-1">Register</h3>
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
                {msgError && <div className="auth__alert-error">{msgError}</div>}

                <input
                    className="auth__input"
                    onChange={handleInputChange}
                    value={name}
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    onChange={handleInputChange}
                    value={email}
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>
            </form>
        </>
    );
};
