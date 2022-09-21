import { Grid, Typography } from "@mui/material"
import React from "react"

const NotFound: React.FC = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", height: "100vh" }}
    >
      <Typography variant="h1">Página não encontrada!</Typography>
    </Grid>
  )
}

export default NotFound
