import { Grid } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Grid display="flex">
        <Sidebar />
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Layout
