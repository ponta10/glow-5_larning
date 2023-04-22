import React from "react";
import PointImage from "../../assets/point.jpg";
import CoinImage from "../../assets/coin.jpeg";
import { Avatar, Stack, Typography } from "@mui/material";

export const Fortune = ({ type, value }) => {
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  const image = type === "point" ? PointImage : CoinImage;
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <img src={image} width="20px" height="20px" />
      <Typography variant="h5" sx={{ color: "#000" }}>
        {numberWithCommas(value)}
        <Typography component="span">{type}</Typography>
      </Typography>
    </Stack>
  );
};
