import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "src/store"
import { getTeams } from "src/store/apps/teams"

export const useTeams = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { teams } = useSelector((state: any) => state.teams)

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  return { teams }
}
