import { Box, Stack } from "@mui/material";
import React from "react";
import { Caption } from "../atoms/Caption";
import { ReviewCard } from "./ReviewCard";
import { CustomButton } from "../atoms/Form/CustomButton";

export const ReviewBox = () => {
  return (
    <Stack spacing={2} sx={{ backgroundColor: "#F5F5F5", p: 3, mt: 2 }}>
      <Caption title="最新のレビュー" />
      <Stack spacing={0.5}>
        {[...Array(5).keys()].map((item) => (
          <ReviewCard
            key={item}
            name="小野カンたろう"
            description="いやぁPonPonPostman非常にいいですなぁ〜"
          />
        ))}
      </Stack>
      <CustomButton title="レビューを投稿する" color="#fff" bgColor="#4EABBA" />
    </Stack>
  );
};
