import { InputAdornment, Stack } from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../atoms/Form/CustomButton";
import { Caption } from "../atoms/Caption";
import { InputField } from "../atoms/Form/InputField";
import { RadioField } from "../atoms/Form/RadioField";
import { Form } from "../atoms/Form/Form";
import { ToggleSwitch } from "../atoms/Form/ToggleSwitch";

export const Sidebar = () => {
  const [category, setCategory] = useState("物品");
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Form
      options={{
        defaultValues: { category: "物品", borrow: true },
      }}
      onSubmit={onSubmit}
    >
      {({ register, formState, control, setValue, getValues, reset }) => (
        <Stack spacing={2} sx={{ backgroundColor: "#F5F5F5", p: 3 }}>
          <Caption title="フリーワード検索" />
          <InputField
            placeholder="検索"
            size="small"
            name="search"
            registration={register("search")}
          />
          <Caption title="利用ポイント" />
          <InputField
            placeholder="下限"
            size="small"
            type="number"
            name="downset"
            registration={register("downset")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">pt</InputAdornment>
              ),
            }}
          />
          <InputField
            placeholder="上限"
            size="small"
            type="number"
            name="upset"
            registration={register("upset")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">pt</InputAdornment>
              ),
            }}
          />
          <Caption title="カテゴリ" />
          <RadioField
            items={["物品", "知識", "体験"]}
            name="category"
            control={control}
            onChange={(value) => setCategory(value)}
          />
          {category == "物品" && (
            <>
              <Caption title="利用状況" />
              <ToggleSwitch name="borrow" control={control} label="貸出可" />
            </>
          )}
          <CustomButton
            title="検索"
            type="submit"
            variant="contained"
            bgColor="#4EABBA"
          />
          <CustomButton
            title="クリア"
            type="button"
            variant="contained"
            bgColor="#fff"
            color="#000"
            clickEvent={() => reset()}
          />
        </Stack>
      )}
    </Form>
  );
};
