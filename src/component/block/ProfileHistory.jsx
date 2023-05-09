import { Box } from "@mui/material";
import React, { useState } from "react";
import { TabBox } from "../modules/TabBox";
import { HistoryTable } from "../atoms/HistoryTable";
import { CustomButton } from "../atoms/Form/CustomButton";
import { useNavigate } from "react-router-dom";

const fetchData = async (name) => {
  // API呼び出しに基づいてデータを取得する関数
  // 例: `fetch('/api/data?name=' + name)`
};

export const ProfileHistory = () => {
  const [selectedTab, setSelectedTab] = useState("");
  console.log(selectedTab);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "", width: 90, cellClassName: 'centered-cell' },
    {
      field: "name",
      headerName: "名前",
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
      field: "owner",
      headerName: "オーナー",
      width: 150,
    },
    {
      field: "date",
      headerName: "開催日時",
      width: 150,
    },
    {
      field: "detail",
      width: 150,
      renderCell: (params) => {
        return (
          <CustomButton
            title="詳細"
            bgColor="#4EABBA"
            color="#fff"
            clickEvent={() => navigate(`/app/detail/${params.value}`)}
          />
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "MacBookAir",
      category: "物品",
      status: "借用中",
      owner: "西川光二郎",
      date: "2022-03",
      detail: 10,
    },
    {
      id: 2,
      name: "AirPods",
      category: "物品",
      status: "返却済",
      owner: "小野三郎",
      date: "2022-02",
      detail: 8,
    },
    {
      id: 3,
      name: "ハッカソン",
      category: "体験",
      status: "参加済",
      owner: "田上玲子",
      date: "2022-01-21",
      detail: 7,
    },
    {
      id: 4,
      name: "MacBookPro",
      category: "物品",
      status: "返却済",
      owner: "西川光二郎",
      date: "2022-03",
      detail: 5,
    },
    {
      id: 5,
      name: "Go勉強会",
      category: "学び",
      status: "参加済",
      owner: "西川光二郎",
      date: "2022-01-30",
      detail: 4,
    },
    {
      id: 6,
      name: "コンサルセミナー",
      category: "体験",
      status: "参加済",
      owner: "西川光二郎",
      date: "2022-03-18",
      detail: 3,
    },
    {
      id: 7,
      name: "MacBookAir",
      category: "物品",
      status: "借用中",
      owner: "西川光二郎",
      date: "2022-03",
      detail: 2,
    },
    {
      id: 8,
      name: "MacBookAir",
      category: "物品",
      status: "借用中",
      owner: "西川光二郎",
      date: "2022-03",
      detail: 1,
    },
  ];

  const initialFilterModel = {
    items: selectedTab !== "全て"
    ? [
        {
          field: 'category',
          operator: 'equals',
          value: selectedTab,
        },
      ]
    : [],
  };

  return (
    <Box sx={{ boxShadow: 8, borderRadius: 2, p: 4 }}>
      <TabBox
        items={[
          {
            label: "全て",
            element: <HistoryTable name="all" rows={rows} columns={columns} initialFilterModel={initialFilterModel} />,
          },
          {
            label: "物品",
            element: <HistoryTable name="item" rows={rows} columns={columns} initialFilterModel={initialFilterModel} />,
          },
          {
            label: "学び",
            element: (
              <HistoryTable name="knowledge" rows={rows} columns={columns} initialFilterModel={initialFilterModel} />
            ),
          },
          {
            label: "体験",
            element: (
              <HistoryTable name="experience" rows={rows} columns={columns} initialFilterModel={initialFilterModel} />
            ),
          },
        ]}
        onChange={(name) => setSelectedTab(name)}
      />
    </Box>
  );
};
