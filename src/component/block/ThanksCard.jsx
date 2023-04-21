import React from "react";
import { CustomButton } from "../atoms/Form/CustomButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Profile } from "../atoms/Profile";

export const ThanksCard = ({ image, name, description }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardContent>
        <Profile logoSrc="https://pontaro.net/wp-content/uploads/2023/02/757bd17370cf026586dc55fc1c514faf.png" name={name} />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <CardActions>
          <CustomButton title="ポイントを送る" />
        </CardActions>
      </CardContent>
    </Card>
  );
};
