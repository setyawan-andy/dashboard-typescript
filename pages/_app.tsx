import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ColorModeContext, useMode } from "../theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ProSidebarProvider } from "react-pro-sidebar"

import { Topbar, SidebarComponent } from "../views/global"

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SidebarComponent />
            <main className="content">
              <Topbar />
              <Component {...pageProps} />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
