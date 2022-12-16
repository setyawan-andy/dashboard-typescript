import { configureStore } from "@reduxjs/toolkit"

// ** Reducers
import teams from "src/store/apps/teams"

// ** Create store
export const store = configureStore({
  reducer: {
    teams,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
