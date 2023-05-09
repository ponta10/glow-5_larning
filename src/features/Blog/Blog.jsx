import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../component/atoms/Form/CustomButton';
import { useAuth } from '../../lib/auth';
import { getApi } from '../../lib/axios';
import { BASE_URL } from '../../utils/const';
import { BasicModal } from '../../component/modules/BasicModal';

export const Blog = () => {
    const { logoutFn } = useAuth();
    const logout = async () => {
      await getApi(`${BASE_URL}/logout`);
      await logoutFn();
    }
    const [ open, setOpen ] = useState(false);
    const [ addOpen, setAddOpen ] = useState(false);
  return (
    <>
      <BasicModal open={open} setOpen={setOpen} >
        <p>aaa</p>
        </BasicModal>
        <BasicModal open={addOpen} setOpen={setAddOpen} >
        <p>bbb</p>
        </BasicModal>
      <CustomButton title="モーダルを開く" clickEvent={() => setOpen(true)} />
      <CustomButton title="モーダルを開く2" clickEvent={() => setAddOpen(true)} />
      <CustomButton title="ログアウト" clickEvent={logout}></CustomButton>
    </>
  )
}
