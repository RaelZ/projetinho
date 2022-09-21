import { Grid, Typography } from "@mui/material"
import React from "react"
import moment from "moment"
import { help } from "../../interfaces/iHelp"

const HelpList: React.FC<help> = (props) => {
  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      sx={{ backgroundColor: "#DDD", borderRadius: 2, p: 2, mb: 2 }}
    >
      <Typography>{props.description}</Typography>
      <Typography>{moment(props.openedDate).format("DD/MM/yyyy")}</Typography>
    </Grid>
  )
}

export default HelpList
