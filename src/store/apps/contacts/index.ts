import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** axios imports
import { axiosInstance } from "src/utils"

// ** Types
interface ContactsState {
  contacts: any[]
  params: {
    search: string
  }
}

// ** Initial State
const initialState: ContactsState = {
  contacts: [],
  params: {
    search: "",
  },
}

// ** Get contacts data
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async ({ params }: any) => {
    const response = await axiosInstance.get("/contacts", {
      params: {
        ...params,
      },
    })

    return response
  }
)

// ** Create slice
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.params = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload.data
      state.params = action.meta.arg.params
    })

    builder.addCase(getContacts.pending, (state, action) => {
      state.contacts = []
    })
    builder.addCase(getContacts.rejected, (state, action) => {
      console.log(action.error)
    })
  },
})

// ** Actions
export const { setParams } = contactsSlice.actions

export default contactsSlice.reducer
