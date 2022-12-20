import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "src/store"
import { getContacts } from "src/store/apps/contacts"

export const useContacts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { contacts } = useSelector((state: any) => state.contacts)
  const [search, setSearch] = useState("")

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(getContacts({ params: { search } }))
  }, [search])

  return { contacts, search, handleSearch }
}
