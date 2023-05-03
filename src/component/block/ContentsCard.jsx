import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const ContentsCard = (props) => {
  const { title, image, description, category, point } = props;
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 160, objectFit: "cover" }}
        image={image}
        title="Contents Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          textAlign="center"
          sx={{
            backgroundColor: "#4EABBA",
            color: "#fff",
            borderRadius: 5,
            px: 2,
            width: 1 / 4,
            whiteSpace: "nowrap",
          }}
        >
          物品
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" component="div">
          {numberWithCommas(point)}pt
        </Typography>
      </CardContent>
    </Card>
  );
};
