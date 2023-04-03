import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../lib/auth';
import { BASE_URL } from '../../utils/const';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const navigate = useNavigate();
    const { loginFn } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if(password_confirmation === password){
          const response = await axios.post(`${BASE_URL}/register`, {
                name,
                email,
                password,
            });
            console.log(response);
            await loginFn({
                accessToken: response.data.token,
            });
            navigate('/');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
  
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
  
        <button type="submit">Register</button>
      </form>
    );
  };
