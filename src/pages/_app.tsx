import "styles/globals.css"
import type { AppProps } from "next/app"
import { ColorModeContext, useMode } from "src/@core/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ProSidebarProvider } from "react-pro-sidebar"
import { store } from "src/store"
import { Provider } from "react-redux"

import { Topbar, SidebarComponent } from "src/@core/components/global"

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode()
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
