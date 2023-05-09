import { Box, Typography } from "@mui/material";
import React from "react";
import { Fortune } from "../atoms/Fortune";
import { CustomButton } from "../atoms/Form/CustomButton";
import { HistoryTable } from "../atoms/HistoryTable";
import { Caption } from "../atoms/Caption";

export const PointBlock = () => {
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
      field: "point",
      headerName: "使用ポイント",
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
      point: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 2,
      name: "AirPods",
      point: 400,
      category: "物品",
      status: "返却済",
      partner: "小野三郎",
      date: "2022-02",
    },
    {
      id: 3,
      name: "ハッカソン",
      category: "体験",
      point: 400,
      status: "参加済",
      partner: "田上玲子",
      date: "2022-01-21",
    },
    {
      id: 4,
      name: "MacBookPro",
      point: 400,
      category: "物品",
      status: "返却済",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 5,
      name: "Go勉強会",
      point: 400,
      category: "学び",
      status: "参加済",
      partner: "西川光二郎",
      date: "2022-01-30",
    },
    {
      id: 6,
      name: "コンサルセミナー",
      point: 400,
      category: "体験",
      status: "参加済",
      partner: "西川光二郎",
      date: "2022-03-18",
    },
    {
      id: 7,
      name: "MacBookAir",
      point: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
    {
      id: 8,
      name: "MacBookAir",
      point: 400,
      category: "物品",
      status: "借用中",
      partner: "西川光二郎",
      date: "2022-03",
    },
  ];
  return (
    <Box sx={{ boxShadow: 4, p: 8 }}>
      <Box sx={{ mb: 4, boxShadow: 1 }}>
        <Typography
          sx={{ backgroundColor: "#4EABBA", color: "#fff", p: 2 }}
          variant="h6"
          fontWeight="bold"
        >
          所持ポイント
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 4, p: 2 }}>
          <Fortune type="point" value={3000} size={60} variant="h3" />
        </Box>
      </Box>
      <Caption title="ポイント交換履歴" />
      <HistoryTable rows={rows} columns={columns} />
    </Box>
  );
};
