import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <h4>Login Component / Page</h4>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sing In</button>
            </div>
            <form action="">
                <input type="email" name="" placeholder='Your Email' />
                <br />
                <input type="password" name="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;