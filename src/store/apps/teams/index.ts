import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** axios imports
import { axiosInstance } from "src/utils"

// ** Types
interface TeamsState {
  teams: any[]
  params: {
    search: string
  }
}

// ** Initial State
const initialState: TeamsState = {
  teams: [],
  params: {
    search: "",
  },
}

// ** Get teams data
export const getTeams = createAsyncThunk(
  "teams/getTeams",
  async ({ params }: any) => {
    const response = await axiosInstance.get("/teams", {
      params: {
        ...params,
      },
    })

    return response
  }
)

// ** Create slice
export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.params = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload.data
      state.params = action.meta.arg.params
    })

    builder.addCase(getTeams.pending, (state, action) => {
      state.teams = []
    })
    builder.addCase(getTeams.rejected, (state, action) => {
      console.log(action.error)
    })
  },
})

// ** Actions
export const { setParams } = teamsSlice.actions

export default teamsSlice.reducer
