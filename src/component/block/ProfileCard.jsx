import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/kanta.jpg";
import { Fortune } from "../atoms/Fortune";
import EditIcon from "@mui/icons-material/Edit";

export const ProfileCard = ({ setOpen }) => {
  return (
    <Grid container padding={4} sx={{ boxShadow: 4 }}>
      <Grid item xs={4}>
        <img
          src={Image}
          alt=""
          width="100%"
          height="300px"
          style={{ objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Stack
          sx={{ px: 4, height: "100%", justifyContent: "space-between" }}
          spacing={2}
        >
          <Stack spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" fontWeight="bold">
                プロフィール
              </Typography>
              <EditIcon
                onClick={() => setOpen(true)}
                sx={{
                  color: "#4EABBA",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Typography variant="h4" color="#4EABBA" fontWeight="bold">
              小野カンたろう
            </Typography>
            <Typography component="p" color="#666">
              新歓部門部長
            </Typography>
            <Typography component="p" color="#666">
              kanta@gmail.com
            </Typography>
            <Stack direction="row" gap={4}>
              <Fortune type="point" value={5000} />
              <Fortune type="coin" value={3000} />
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between" gap={2}>
            {[...Array(3).keys()].map((item) => (
              <Typography
                gutterBottom
                component="div"
                textAlign="center"
                sx={{
                  backgroundColor: "#4EABBA",
                  color: "white",
                  borderRadius: 10,
                  p: 1.5,
                  width: 1 / 3,
                  whiteSpace: "nowrap",
                  boxShadow: 2,
                }}
              >
                AWS最強
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
