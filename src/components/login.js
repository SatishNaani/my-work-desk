import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();
    const onSubmit = (evt) => {
        debugger;
        console.log(email);
        console.log(password);
        let val = '12244'
        navigator(`/UserDashboard/${val}`);
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Login</h3>
                    <div className="logoClass"></div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={event => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={event => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button onClick={onSubmit} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
