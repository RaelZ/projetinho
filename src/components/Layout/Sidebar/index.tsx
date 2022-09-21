import { Button, Grid } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { menu } from "./data"

const Sidebar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Grid
      sx={{
        minWidth: 320,
        backgroundColor: "black",
        height: "calc(100vh - 50px)",
      }}
    >
      {menu.map((item) => (
        <Button
          key={item.id}
          fullWidth
          variant="contained"
          onClick={() => navigate(item.path)}
          disableElevation
          sx={{
            color: "black",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "white" },
            mb: 2
          }}
        >
          {item.label}
        </Button>
      ))}
    </Grid>
  )
}

export default Sidebar
