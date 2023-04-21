import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../lib/auth';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { BASE_URL } from '../../utils/const';
import SlackLoginButton from 'react-slack-login';

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
        // localStorage.setItem('token', response.data.token);
        await loginFn({
            accessToken: response.data.token,
        });
        enqueueSnackbar('ログインが完了しました！', { variant: 'success' });
        navigate("/app/top");
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
              {/* <button style="align-items:center;color:#000;background-color:#fff;border:1px solid #ddd;border-radius:4px;display:inline-flex;font-family:Lato, sans-serif;font-size:16px;font-weight:600;height:48px;justify-content:center;text-decoration:none;width:256px">
                <svg xmlns="http://www.w3.org/2000/svg" style="height:20px;width:20px;margin-right:12px" viewBox="0 0 122.8 122.8">
                  <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
                  <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
                  <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
                  <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
                </svg>
                Sign in with Slack
                </button> */}
      </form>
    );
  }
