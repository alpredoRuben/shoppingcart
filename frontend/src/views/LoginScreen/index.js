import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {LoginUserAccount} from '../../redux/actions';

function LoginScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading, authUser, errors} = useSelector(state => state.UserLoginReducer)

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(authUser) {
            props.history.push('/')
        }

        return () => {}
    }, [authUser]);

    const submitHandler = (e) => {
        e.preventDefault(); 
        dispatch(LoginUserAccount(email, password))
    } 


    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li className="text-center">
                        <h2>Sign-In To Your Account</h2>
                    </li>
                    <li>
                        { loading && <div>Loading...</div> }
                        { errors && <div>{errors}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                    </li>
                    <li>
                        <button type="submit" className="button button-primary">
                            LOGIN
                        </button>
                    </li> 
                    <li>
                        I don't have an account.
                    </li>
                    <li>
                        <Link to="/register" className="button button-secondary text-center">
                            Create Account
                        </Link>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default LoginScreen;