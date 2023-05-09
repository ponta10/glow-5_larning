import React from 'react'
import { Form } from '../../component/atoms/Form/Form'
import { Stack } from '@mui/material'
import { Caption } from '../../component/atoms/Caption'
import { InputField } from '../../component/atoms/Form/InputField'
import { CustomButton } from '../../component/atoms/Form/CustomButton'

export const CurrentModal = ({ setOpen }) => {
    const onSubmit = async (data) => {
        console.log(data);
      };
  return (
    <Form
    onSubmit={onSubmit}
  >
    {({ register, formState, control, setValue }) => (
      <Stack spacing={4}>
        <Caption title="近況共有" />
          <InputField
          name="current"
          label="近況"
          registration={register("current")}
          multiline
          rows={6}
        />
        <CustomButton title="投稿する" bgColor="#4EABBA" color="#fff" type="submit" clickEvent={() => setOpen(false)} />
      </Stack>
    )}
  </Form>
  )
}
