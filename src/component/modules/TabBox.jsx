import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

export const TabBox = (props) => {
  const { items, onChange } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(items[newValue].label);
  };
  const tabStyle = {
    "&.Mui-selected": {
      color: "base",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "base",
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
        {items.map((item, index) => (
          <Tab
            sx={tabStyle}
            key={index}
            label={item.label}
            value={String(index)}
          />
        ))}
      </Tabs>
      {items.map((item, index) => (
        <TabPanel key={index} value={String(index)}>
          {item.element}
        </TabPanel>
      ))}
    </TabContext>
  );
};
