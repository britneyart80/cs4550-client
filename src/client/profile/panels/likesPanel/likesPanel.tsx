import React from "react";
import Tab from "@mui/material/Tab";
import TabPanel, { TabPanelProps } from "../../../components/tabPanel/tabPanel";

const LikesPanel = (props: TabPanelProps) => {
  return <TabPanel value={props.value}>likes panel</TabPanel>;
};

export default LikesPanel;
