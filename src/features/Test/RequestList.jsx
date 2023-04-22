import React from "react";
import { Grid, Stack } from "@mui/material";
import { ContentsCard } from "../../component/block/ContentsCard";
import { Caption } from "../../component/atoms/Caption";

export const RequestList = () => {
  return (
    <Stack spacing={2}>
      <Caption title="最新のリクエスト" />
      <Grid container rowGap={2} gap={5}>
        {[...Array(15).keys()].map((item) => (
          <Grid item xs={12} sm={5} md={3.5} key={item}>
            <ContentsCard
              title="MacBookAir"
              description="2022年発売の最新モデルでカラーはミッドナイトです"
              point="500"
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
