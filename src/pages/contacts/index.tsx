import { Box, useTheme } from "@mui/material"
import { tokens } from "src/@core/theme"
import { mockDataContacts } from "src/@fake-db/table"
import { Header } from "src/@core/components"
import { Tables } from "src/@core/components"

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

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // columns for the data grid
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List contacts for future reference" />
      <Tables rows={mockDataContacts} columns={columns} toolBar={true} />
    </Box>
  )
}

export default Contacts
