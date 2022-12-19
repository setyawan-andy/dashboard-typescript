import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** axios imports
import { axiosInstance } from "src/utils"

// ** Types
interface ContactsState {
  contacts: any[]
}

// ** Initial State
const initialState: ContactsState = {
  contacts: [],
}

// ** Get contacts data
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    const response = await axiosInstance.get("/contacts")

    return response
  }
)

// ** Create slice
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload.data
    })

    builder.addCase(getContacts.pending, (state, action) => {
      state.contacts = []
    })
    builder.addCase(getContacts.rejected, (state, action) => {
      console.log(action.error)
    })
  },
})

export default contactsSlice.reducer
