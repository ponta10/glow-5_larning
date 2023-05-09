import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Fortune } from "../atoms/Fortune";
import { CustomButton } from "../atoms/Form/CustomButton";
import { HistoryTable } from "../atoms/HistoryTable";
import { Caption } from "../atoms/Caption";
import { BasicModal } from "../modules/BasicModal";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export const CoinBlock = () => {
  const columns = [
    { field: "id", headerName: "", width: 90, cellClassName: "centered-cell" },
    {
      field: "name",
      headerName: "名前",
      width: 150,
    },
    {
      field: "partner",
      headerName: "交換相手",
      width: 150,
    },
    {
      field: "coin",
      headerName: "獲得コイン",
      width: 150,
    },
    {
      field: "category",
      headerName: "カテゴリ",
      width: 150,
    },
    {
      field: "status",
      headerName: "ステータス",
      width: 150,
    },
    {
      field: "date",
      headerName: "日時",
      width: 150,
    },
  ];
  const rows = [
    {
      id: 1,
      name: "MacBookAir",
      coin: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 2,
      name: "AirPods",
      coin: 400,
      category: "物品",
      status: "返却済",
      partner: "小野三郎",
      date: "2022-02",
    },
    {
      id: 3,
      name: "ハッカソン",
      category: "体験",
      coin: 400,
      status: "参加済",
      partner: "田上玲子",
      date: "2022-01-21",
    },
    {
      id: 4,
      name: "MacBookPro",
      coin: 400,
      category: "物品",
      status: "返却済",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 5,
      name: "Go勉強会",
      coin: 400,
      category: "学び",
      status: "参加済",
      partner: "西川光二郎",
      date: "2022-01-30",
    },
    {
      id: 6,
      name: "コンサルセミナー",
      coin: 400,
      category: "体験",
      status: "参加済",
      partner: "西川光二郎",
      date: "2022-03-18",
    },
    {
      id: 7,
      name: "MacBookAir",
      coin: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 8,
      name: "MacBookAir",
      coin: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
  ];
  const [ open, setOpen ] = useState(false);
  return (
    <Box sx={{ boxShadow: 4, p: 8 }}>
      <Box sx={{ mb: 4, boxShadow: 1 }}>
        <Typography
          sx={{ backgroundColor: "#F2BC1A", color: "#fff", p: 2 }}
          variant="h6"
          fontWeight="bold"
        >
          所持コイン
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 4, p: 2 }}>
          <Fortune type="coin" value={3000} size={60} variant="h3" />
          <CustomButton
            title="換金する"
            bgColor="#F2BC1A"
            color="#fff"
            width={1 / 4}
            clickEvent={() => setOpen(true)}
          />
        </Box>
      </Box>
      <Caption title="コイン交換履歴" />
      <HistoryTable rows={rows} columns={columns} />
      <BasicModal open={open} setOpen={setOpen}>
        <Stack spacing={2} >
        <Caption title="コイン換金申請" mb={2} />
        <Box sx={{ width: "100%" }} flexDirection="column" justifyContent="center">
        <Fortune type="coin" value={1000} />
        <ArrowDropDownCircleIcon />
        <Fortune type="coin" value={1000} />
        </Box>
        <CustomButton
            title="キャンセル"
            bgColor="#F5F5F5"
            color="#000"
            clickEvent={() => setOpen(false)}
          />
        <CustomButton
            title="換金を申請する"
            bgColor="#4EABBA"
            color="#fff"
            clickEvent={() => setOpen(false)}
          />
        </Stack>
      </BasicModal>
    </Box>
  );
};
