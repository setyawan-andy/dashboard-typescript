import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ColorModeContext, useMode } from "../theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

import Topbar from "../views/global/Topbar"

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
