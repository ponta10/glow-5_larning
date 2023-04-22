import React, { useState } from "react";
import { ContentsList } from "./ContentsList";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { RequestList } from "./RequestList";

export const Main = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#4EABBA",
          },
        }}
        sx={{ px: 3 }}
      >
        <Tab
          label="最新のコンテンツ"
          sx={{
            "&.Mui-selected": {
              color: "#4EABBA",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "#4EABBA",
            },
          }}
        />
        <Tab
          label="最新のリクエスト"
          sx={{
            "&.Mui-selected": {
              color: "#4EABBA",
            },
            "&.Mui-focusVisible": {
              backgroundColor: "#4EABBA",
            },
          }}
        />
      </Tabs>
      <TabPanel value={0}>
        <ContentsList />
      </TabPanel>
      <TabPanel value={1}>
        <RequestList />
      </TabPanel>
    </TabContext>
  );
};
