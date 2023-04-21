import React from "react";
import { Box, Typography } from "@mui/material";

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};



// function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
//   }
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };  
// <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           sx={{
//             position: "sticky",
//             top: 0,
//             width: "100%",
//             zIndex: 2,
//             backgroundColor: "gray.0",
//           }}
//         >
//           <Tab label="シフト確認" {...a11yProps(0)} />
//           <Tab label="給与計算" {...a11yProps(1)} />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           {tableOpen && <ShiftTable setModalOpen={setModalOpen} />}
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           {tableOpen && <SalaryTable tableOpen={tableOpen} />}
//         </TabPanel>