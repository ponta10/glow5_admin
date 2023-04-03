import React from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../component/CustomButton';
import { useAuth } from '../../lib/auth';
import { getApi } from '../../lib/axios';
import { BASE_URL } from '../../utils/const';

export const Blog = () => {
    const { logoutFn } = useAuth();
    const logout = async () => {
      await getApi(`${BASE_URL}/logout`);
        await logoutFn();
    }
  return (
    <>
      <Link to="/">ホームへ</Link>
      <CustomButton title="ログアウト" clickEvent={logout}></CustomButton>
    </>
  )
}
