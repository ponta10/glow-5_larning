import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { PageLink } from "./PageLink";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import StarsIcon from "@mui/icons-material/Stars";
import SendIcon from "@mui/icons-material/Send";
import { Profile } from "../atoms/Profile";
import Image from "../../assets/kanta.jpg";
import LogoutIcon from "@mui/icons-material/Logout";

export const Navbar = () => {
  const iconSx = {
    width: "24px",
    height: "24px",
    mr: 2,
  };
  return (
    <Stack
      spacing={2}
      sx={{
        fontSize: "1.2vw",
        backgroundColor: "#fff",
        boxShadow: 2,
        p: 3,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <PageLink
          title="プロフィール"
          path="/app/profile"
          icon={<AccountCircleIcon sx={iconSx} />}
        />
        <PageLink
          title="利用ずみコンテンツ"
          path="/app/profile/used"
          icon={<HistoryIcon sx={iconSx} />}
        />
        <PageLink
          title="自分のコンテンツ"
          path="/app/profile/owner"
          icon={<AccessibilityIcon sx={iconSx} />}
        />
        <PageLink
          title="リクエスト"
          path="/app/profile/request"
          icon={<SendIcon sx={iconSx} />}
        />
        <PageLink
          title="コイン"
          path="/app/profile/coin"
          icon={<MonetizationOnIcon sx={iconSx} />}
        />
        <PageLink
          title="ポイント"
          path="/app/profile/point"
          icon={<StarsIcon sx={iconSx} />}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          fontWeight: "bold",
          "&:hover": {
            color: "#4EABBA",
          },
        }}
      >
        <LogoutIcon sx={iconSx} />
        <Typography variant="subtitle1">ログアウト</Typography>
      </Box>
      <Profile name="小野カンたろう" logoSrc={Image} size={24} />
    </Stack>
  );
};
