import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "src/store"
import { getContacts } from "src/store/apps/contacts"

export const useContacts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { contacts } = useSelector((state: any) => state.contacts)

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  return { contacts }
}
