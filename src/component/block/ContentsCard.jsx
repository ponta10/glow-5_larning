import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "../../assets/pc1.jpg";

export const ContentsCard = (props) => {
  const { title, image, description, category, point } = props;
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 160, objectFit: "cover" }}
        image={Image}
        title="Contents Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign="center"
          sx={{
            backgroundColor: "#4EABBA",
            color: "#fff",
            borderRadius: 5,
            px: 2,
            width: 1 / 4,
          }}
        >
          物品
        </Typography>
        <Typography gutterBottom  variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" component="div">
          {point}pt
        </Typography>
      </CardContent>
    </Card>
  );
};
