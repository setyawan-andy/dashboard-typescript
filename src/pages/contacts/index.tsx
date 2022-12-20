import { Box } from "@mui/material"
import { Header } from "src/@core/components"
import { Tables } from "src/@core/components"
import { columns } from "src/@core/components/column/contacts"
import { useContacts } from "src/hooks/contacts"

const Contacts = () => {
  const { contacts } = useContacts()
  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List contacts for future reference" />
      <Tables rows={contacts} columns={columns} toolBar={true} />
    </Box>
  )
}

export default Contacts
