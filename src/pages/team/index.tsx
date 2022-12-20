import { Box } from "@mui/material"
import { Header } from "src/@core/components"
import { Tables } from "src/@core/components"
import { columns } from "src/@core/components/column/teams"
import { useTeams } from "src/hooks/teams"

const Team = () => {
  const { teams } = useTeams()

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Tables rows={teams} columns={columns} />
    </Box>
  )
}

export default Team
