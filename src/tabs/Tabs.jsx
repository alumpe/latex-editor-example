import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "./TabPanel";
import "./tabsStyles.css";

export const TabsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-container">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Panel 1
      </TabPanel>

      <TabPanel value={value} index={1}>
        Panel 2
      </TabPanel>

      <TabPanel value={value} index={2}>
        Panel 3
      </TabPanel>
    </div>
  );
};
