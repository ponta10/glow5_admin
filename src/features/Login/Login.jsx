import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../lib/auth';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { BASE_URL } from '../../utils/const';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { loginFn } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        setLoading(true);
        const response = await axios.post(`${BASE_URL}/login`, {
          email,
          password,
        });
        console.log(response);
        // localStorage.setItem('token', response.data.token);
        await loginFn({
            accessToken: response.data.token,
        });
        enqueueSnackbar('ログインが完了しました！', { variant: 'success' });
        navigate("/app/blog");
      } catch (error) {
        console.log(error);
        // エラーメッセージを受け取り、表示
        enqueueSnackbar('ログインに失敗しました！', { variant: 'error' });
        setErrors(error.response.data);
    }finally{
      setLoading(false);
    };
}
  
    return (
      <form onSubmit={handleSubmit}>
        {errors && (
            <p>{errors}</p>
        )}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
              <LoadingButton
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
                type="submit"
                loading={loading}
              >
                ログイン
              </LoadingButton>
      </form>
    );
  }
