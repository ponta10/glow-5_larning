import React, { useState } from "react";
import { Caption } from "../../component/atoms/Caption";
import { BreadCrumbs } from "../../component/modules/BreadCrumbs";
import { RadioField } from "../../component/atoms/Form/RadioField";
import { useForm } from "react-hook-form";
import { HistoryTable } from "../../component/atoms/HistoryTable";
import { Form } from "../../component/atoms/Form/Form";
import { CustomButton } from "../../component/atoms/Form/CustomButton";
import { InputField } from "../../component/atoms/Form/InputField";
import { SelectField } from "../../component/atoms/Form/SelectField";
import { ContentsCard } from "../../component/block/ContentsCard";
import { ThanksCard } from "../../component/block/ThanksCard";
import { ReviewCard } from "../../component/block/ReviewCard";
import { Fortune } from "../../component/atoms/Fortune";
import { BasicModal } from "../../component/modules/Modal";
import { Header } from "../../component/block/Header";
import { Footer } from "../../component/block/Footer";
import { MainLayout } from "../../component/layout/MainLayout";
import { Sidebar } from "../../component/block/Sidebar";
import { Grid } from "@mui/material";

export const Test = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <MainLayout
      links={[
        {
          name: "トップ",
          href: "/app/test",
        },
        {
          name: "請求一覧",
          href: "/app/top",
        },
        {
          name: "請求詳細",
        },
      ]}
    >
      <Grid container padding={4}>
        <Grid item xs={9}>
            <p>aa</p>
        </Grid>
        <Grid item xs={3}>
        <Sidebar />
        </Grid>
      </Grid>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p> <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p> <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
      <p>あああ</p>
    </MainLayout>
    // <Form
    //   options={{
    //     defaultValues: { outdoor: "海", animal: "猫", country: "アメリカ" },
    //   }}
    //   onSubmit={onSubmit}
    // >
    //   {({ register, formState, control, setValue }) => (
    //     <>
    //       <RadioField
    //         items={["海", "山", "川"]}
    //         name="outdoor"
    //         control={control}
    //       />
    //       <SelectField
    //         items={["アメリカ", "韓国", "イギリス"]}
    //         name="country"
    //         control={control}
    //       />
    //       <InputField
    //         name="animal"
    //         placeholder="犬"
    //         registration={register("animal")}
    //       />
    //       <CustomButton title="送信" type="submit" />
    //     </>
    //   )}
    // </Form>
  );
};
