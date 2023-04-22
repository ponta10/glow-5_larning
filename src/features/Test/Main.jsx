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
  const tabStyle = {
    "&.Mui-selected": {
      color: "#4EABBA",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#4EABBA",
    },
  };
  return (
    <TabContext value={String(value)}>
      <Tabs
        value={String(value)}
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
          sx={tabStyle}
          value="0"
        />
        <Tab
          label="最新のリクエスト"
          sx={tabStyle}
          value="1"
        />
      </Tabs>
      <TabPanel value="0">
        <ContentsList />
      </TabPanel>
      <TabPanel value="1">
        <RequestList />
      </TabPanel>
    </TabContext>
  );
};
