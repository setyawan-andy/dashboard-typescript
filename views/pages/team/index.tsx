import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../theme"
import { mockDataTeam } from "../../../static/mockData"
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material"
import { Header } from "../../components"
import { Tables } from "../../components"

interface GridColDef {
  field: string
  headerName: string
  flex?: number
  type?: string
  headerAlign?: string
  align?: string
  cellClassName?: string
  renderCell?: ({ row }: { row: any }) => JSX.Element
}

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // columns for the data grid
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-cell-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        const { access } = row
        return (
          <Box
            width="60%"
            p="5px 32px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700],
            }}
            borderRadius="4px"
          >
            <Box>
              {access === "admin" && <AdminPanelSettingsOutlined />}
              {access === "manager" && <SecurityOutlined />}
              {access === "user" && <LockOpenOutlined />}
            </Box>
            <Typography color={colors.grey[100]} sx={{ ml: "10px", flex: 1 }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Tables rows={mockDataTeam} columns={columns} />
    </Box>
  )
}

export default Team
