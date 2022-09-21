import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import HelpList from "../../components/HelpList"
import { useHelp } from "../../hooks"
import { help } from "../../interfaces/iHelp"

const Home: React.FC = () => {
  const { list, GetAll } = useHelp()

  useEffect(() => {
    GetAll()
  }, [])

  return (
    <Grid p={2}>
      {list.map((item: help) => (
        <HelpList key={item.id} {...item} />
      ))}
    </Grid>
  )
}

export default Home
