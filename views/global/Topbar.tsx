import { Box, IconButton, useTheme, InputBase } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import { NextPage } from "next"

// icons
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
} from "@mui/icons-material"

const Topbar: NextPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* Search bar */}
      <Box
        display={"flex"}
        borderRadius={"3px"}
        sx={{
          backgroundColor: colors.primary[400],
        }}
      >
        <InputBase
          sx={{
            ml: 2,
          }}
          placeholder="Search"
        />
        <IconButton
          type="button"
          sx={{
            p: 1,
          }}
        >
          <Search />
        </IconButton>
      </Box>

      {/* Right side */}
      <Box display={"flex"} alignItems={"center"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
