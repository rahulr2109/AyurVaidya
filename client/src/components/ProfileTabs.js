import { Card, Tab, Tabs } from "@mui/material";
import React from "react";

const ProfileTabs = (props) => {
  const handleChange = (e, newValue) => {
    props.setTab(newValue);
  };

  return (
    <Card sx={{ padding: 0, backgroundColor: "#F5F5DC", }}>
      <Tabs value={props.tab} onChange={handleChange} variant="scrollable">
        <Tab label="Question" value="posts" />
        <Tab label="Upvotes" value="liked" />
        <Tab label="Answers" value="comments" />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;
