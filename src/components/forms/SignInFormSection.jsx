import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';   
import { toast } from 'react-toastify';  
import { BASE_URL } from '../helpers/config';   
import axios from 'axios';

const SignInFormSection = () => {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/products/user/login/`, {
                email,
                password,
            });
    
            const { access } = response.data;
    
            if (access) {
                localStorage.setItem('authToken', access);  
                console.log("authToken",access)
                console.log("email",email)
                alert('Login successful!');  
                navigate('/');   
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid Credentials'); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="login-email" 
                id="login-email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                name="login-password" 
                id="login-password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="sign-in-checkbox-container d-flex justify-content-between">
            <div className="stay-sign-in">
               
                </div>
                <Link to="#" className="password-recovery-btn">Forgot Your Password?</Link>
            </div>
            <button type="submit" className="fz-1-banner-btn single-form-btn">Log in</button>
        </form>
    );
};

export default SignInFormSection;
