import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "src/store"
import { getTeams } from "src/store/apps/teams"

export const useTeams = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { teams } = useSelector((state: any) => state.teams)
  const [search, setSearch] = useState("")

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const getTeamsData = () => {
    dispatch(getTeams({ params: { search } }))
  }

  useEffect(() => {
    getTeamsData()
  }, [search])

  return { teams, search, handleSearch }
}
