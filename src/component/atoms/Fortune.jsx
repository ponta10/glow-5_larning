import React from "react";
import PointImage from "../../assets/point.jpg";
import CoinImage from "../../assets/coin.jpeg";
import { Stack, Typography } from "@mui/material";

export const Fortune = ({ type, value, size, variant }) => {
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  const image = type === "point" ? PointImage : CoinImage;
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <img src={image} width={size} height={size} />
      <Typography variant={variant} sx={{ color: "gray.900" }}>
        {numberWithCommas(value)}
        <Typography component="span">{type}</Typography>
      </Typography>
    </Stack>
  );
};

Fortune.defaultProps = { size: 20, variant: "h6" }
