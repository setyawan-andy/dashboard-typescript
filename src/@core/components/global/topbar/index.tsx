import { Box, IconButton, useTheme, InputBase } from "@mui/material"
import { useContext, useEffect } from "react"
import { ColorModeContext, tokens } from "src/@core/theme"
import { NextPage } from "next"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "src/store"
import { setParams } from "src/store/apps/teams"
import { useTeams } from "src/hooks/teams"
import { useContacts } from "src/hooks/contacts"
import { useRouter } from "next/router"

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
  const router = useRouter()
  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const { params } = useSelector((state: any) => state.teams)
  const { search, handleSearch } = useTeams()

  useEffect(() => {
    dispatch(setParams({ ...params, search }))
  }, [search])

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
          onChange={handleSearch}
          value={search}
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
