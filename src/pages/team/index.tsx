import { Box } from "@mui/material"
import { Header } from "src/@core/components"
import { Tables } from "src/@core/components"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "src/store"
import { getTeams } from "src/store/apps/teams"
import { useEffect } from "react"
import { columns } from "src/@core/components/column/teams"

const Team = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { teams } = useSelector((state: any) => state.teams)

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Tables rows={teams} columns={columns} />
    </Box>
  )
}

export default Team
