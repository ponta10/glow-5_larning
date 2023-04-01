import React from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../component/CustomButton';
import { useAuth } from '../../lib/auth';

export const Blog = () => {
    const { logoutFn } = useAuth();
    const logout = async () => {
        await logoutFn();
    }
  return (
    <>
      <Link to="/">ホームへ</Link>
      <CustomButton title="ログアウト" clickEvent={logout}></CustomButton>
    </>
  )
}
