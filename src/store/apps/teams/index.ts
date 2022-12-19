import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** axios imports
import { axiosInstance } from "src/utils"

// ** Types
interface TeamsState {
  teams: any[]
}

// ** Initial State
const initialState: TeamsState = {
  teams: [],
}

// ** Get teams data
export const getTeams = createAsyncThunk("teams/getTeams", async () => {
  const response = await axiosInstance.get("/teams")

  return response
})

// ** Create slice
export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload.data
    })

    builder.addCase(getTeams.pending, (state, action) => {
      state.teams = []
    })
    builder.addCase(getTeams.rejected, (state, action) => {
      console.log(action.error)
    })
  },
})

export default teamsSlice.reducer
