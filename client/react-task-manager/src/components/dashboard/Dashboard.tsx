import React, { FC, ReactElement } from "react";
// MUI components
import { Grid } from "@mui/material";
// Components
import Sidebar from "../sidebar/Sidebar";
import TaskArea from "../taskArea/TaskArea";

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>

        {/* MAIN TASK MANAGEMENT AREA */}
        <TaskArea />

        {/* SIDEBAR FORM */}
        <Sidebar />


    </Grid>
  );
};

export default Dashboard;