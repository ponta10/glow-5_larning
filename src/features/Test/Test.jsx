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
import { BasicModal } from "../../component/modules/BasicModal";
import { Header } from "../../component/block/Header";
import { Footer } from "../../component/block/Footer";
import { MainLayout } from "../../component/layout/MainLayout";
import { Sidebar } from "../../component/block/Sidebar";
import { Box, Grid, InputAdornment, Stack, Typography } from "@mui/material";
import { ReviewBox } from "../../component/block/ReviewBox";
import { ContentsList } from "./ContentsList";
import { Main } from "./Main";
import { Hero } from "./Hero";
import { Navbar } from "../../component/block/Navbar";
import { ProfileCard } from "../../component/block/ProfileCard";
import Image from "../../assets/pc1.jpg";
import StudyImage from "../../assets/study2.jpg";
import { ProfileHistory } from "../../component/block/ProfileHistory";
import ImageUpload from "./ImageUpload";
import { CoinBlock } from "../../component/block/CoinBlock";
import { PointBlock } from "../../component/block/PointBlock";
import { CurrentModal } from "./CurrentModal";
import { ThanksModal } from "./ThanksModal";
import { TabBox } from "../../component/modules/TabBox";
import { Mention, Mentions } from "./Mention";
import MentionTextField from "./MentionTextField";

export const Test = () => {
  const onSubmit = async (data) => {
    console.log(data);
  };
  const [open, setOpen] = useState(false);

  return (
    <MainLayout
      links={[
        {
          name: "トップ",
          href: "/app/top",
        },
        {
          name: "プロフィール",
        },
      ]}
    >
      {/* <Hero />
      <Grid container sx={{ px: 7, mt: 2 }}>
        <Grid item xs={9.25}>
          <Main />
        </Grid>
        <Grid item xs={2.75}>
          <Sidebar />
          <ReviewBox />
        </Grid>
      </Grid> */}
      <Grid container spacing={4}>
        <Grid item xs={2.5}>
          <Navbar />
        </Grid>
        <Grid item xs={9.5}>
          <Stack spacing={4}>
            <ProfileCard setOpen={setOpen} />
            <Caption title="現在利用中の物品" />
            <ContentsCard
              title="MacBookAir"
              description="2022年発売の最新モデルでカラーはミッドナイトです"
              point={500}
              image={Image}
            />
            <Caption title="参加予定の学び/体験" />
            <ContentsCard
              title="MacBookAir"
              description="2022年発売の最新モデルでカラーはミッドナイトです"
              point={500}
              image={StudyImage}
            />
          </Stack>
        </Grid>
      </Grid>
      <ProfileHistory />
      <BasicModal open={open} setOpen={setOpen} size={800}>
        <Form
          options={{
            defaultValues: {
              name: "小野カンたろう",
              badge: ["noneSelected", "noneSelected", "noneSelected"],
            },
          }}
          onSubmit={onSubmit}
        >
          {({ register, formState, control, setValue }) => (
            <Grid container padding={4} sx={{ boxShadow: 4 }}>
              <Grid item xs={4}>
                <ImageUpload image={Image} control={control}></ImageUpload>
              </Grid>
              <Grid item xs={8}>
                <Stack
                  sx={{
                    px: 4,
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                  spacing={2}
                >
                  <Typography variant="h6" fontWeight="bold">
                    プロフィール編集
                  </Typography>
                  <InputField
                    name="name"
                    label="名前"
                    registration={register("name")}
                  />
                  <Stack direction="row" justifyContent="space-between" gap={2}>
                    {[...Array(3).keys()].map((item) => (
                      <SelectField
                        sx={{
                          backgroundColor: "#4EABBA",
                          color: "white",
                          borderRadius: 10,
                          p: 1.5,
                          width: 1 / 3,
                          whiteSpace: "nowrap",
                          boxShadow: 2,
                        }}
                        control={control}
                        name={`badge[${item}]`}
                        label="称号"
                        items={[
                          "reactマスター",
                          "AWS最強",
                          "2022年2月最多利用者",
                        ]}
                      >
                        AWS最強
                      </SelectField>
                    ))}
                  </Stack>
                  <CustomButton
                    title="編集"
                    bgColor="#4EABBA"
                    color="#fff"
                    variant="contained"
                    type="submit"
                    clickEvent={() => setOpen(false)}
                  ></CustomButton>
                </Stack>
              </Grid>
            </Grid>
          )}
        </Form>
      </BasicModal>
      <BasicModal open={open} setOpen={setOpen} size={600}>
        <Form
          options={{
            defaultValues: {
              name: "MacBookAir",
            },
          }}
          onSubmit={onSubmit}
        >
          {({ register, formState, control, setValue }) => (
            <Stack spacing={4}>
              <Caption title="レビュー" />
              <InputField
                name="name"
                label="名前"
                registration={register("name")}
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
                <InputField
                name="review"
                label="評価"
                registration={register("review")}
                multiline
                rows={5}
              />
              <CustomButton title="レビューする" bgColor="#4EABBA" color="#fff" type="submit" />
            </Stack>
          )}
        </Form>
      </BasicModal>


      <BasicModal open={open} setOpen={setOpen} size={600}>
      <TabBox
        items={[
          {
            label: "近況",
            element: <CurrentModal setOpen={setOpen} />,
          },
          {
            label: "感謝",
            element: <ThanksModal setOpen={setOpen} />,
          },
        ]}
      />
      </BasicModal>
      <CoinBlock />
      <PointBlock />
      <Mentions></Mentions>
      <MentionTextField></MentionTextField>
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
