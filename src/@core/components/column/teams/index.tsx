import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { tokens } from "src/@core/theme"
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material"

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

export const columns: GridColDef[] = [
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
      const theme = useTheme()
      const colors = tokens(theme.palette.mode)
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
