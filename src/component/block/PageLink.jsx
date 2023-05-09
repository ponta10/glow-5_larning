import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";


export const PageLink = ({ title, path, icon }) => {
  const pathname = useLocation().pathname;
  const linkSX = {
    display: "flex",
    alignItems: "center",
    py: 0.5,
    color: "gray.500",
    textDecoration: "none",
    "&:hover": {
      color: "#4EABBA",
    },
  };

  const linkHoverSX = {
    ...linkSX,
    color: "#4EABBA",
  };

  return (
    <>
      {pathname === path ? (
        <Box sx={linkHoverSX}>
          {icon}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
      ) : (
        <Box to={path} component={Link} sx={linkSX}>
          {icon}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
      )}
    </>
  );
};
