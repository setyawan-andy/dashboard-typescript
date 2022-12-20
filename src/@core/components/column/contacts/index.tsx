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

// columns for the data grid
export const columns: GridColDef[] = [
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
