import { Box, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "src/@core/theme"

interface TablesProps {
  columns: any[]
  rows: any[]
  toolBar?: boolean
}

const Tables = ({ toolBar, rows, columns }: TablesProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      m="40px 0 0 0"
      height="70vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: colors.primary[100],
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: toolBar ? GridToolbar : null,
        }}
      />
    </Box>
  )
}

export default Tables
