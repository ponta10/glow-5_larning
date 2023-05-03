import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Profile } from "../atoms/Profile";
import Image from "../../assets/kanta.jpg"

export const ReviewCard = ({ name, description }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardContent>
        <Profile
          logoSrc={Image}
          name={name}
        />
        <Typography variant="h6" gutterBottom fontWeight="bold">
          react勉強会
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
