import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../lib/auth';
import { useSnackbar } from 'notistack';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const { loginFn } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost/api/login', {
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
        <button type="submit">Login</button>
      </form>
    );
  }
