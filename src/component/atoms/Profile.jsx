import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export const Profile = ({ logoSrc, name }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Avatar src={logoSrc} sx={{ boxShadow: 2 }} />
      <Typography 
        variant="h6" 
        component="div"
      >
        {name}
      </Typography>
    </Box>
  );
};
