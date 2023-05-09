import React from "react";
import { Form } from "../../component/atoms/Form/Form";
import { InputAdornment, Stack } from "@mui/material";
import { Caption } from "../../component/atoms/Caption";
import { InputField } from "../../component/atoms/Form/InputField";
import { CustomButton } from "../../component/atoms/Form/CustomButton";

export const ThanksModal = ({ setOpen }) => {
    const onSubmit = async (data) => {
        console.log(data);
      };
  return (
    <Form onSubmit={onSubmit}>
      {({ register, formState, control, setValue }) => (
        <Stack spacing={4}>
          <Caption title="感謝共有" />
          <InputField
            name="name"
            label="名前"
            registration={register("name")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">@</InputAdornment>
              ),
            }}
          />
          <InputField
            name="thanks"
            label="感謝"
            registration={register("thanks")}
            multiline
            rows={6}
          />
          <InputField
            name="point"
            label="寄付ポイント"
            registration={register("point")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">pt</InputAdornment>
              ),
            }}
            type="number"
          />
          <CustomButton
            title="投稿する"
            bgColor="#4EABBA"
            color="#fff"
            type="submit"
            clickEvent={() => setOpen(false)}
          />
        </Stack>
      )}
    </Form>
  );
};
