import { useState } from "react"
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import { tokens } from "src/@core/theme"
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material"
import Image from "next/image"

interface ItemProps {
  title: string
  to: string
  icon: JSX.Element
  selected: string
  setSelected: (title: string) => void
  isCollapsed: boolean
}

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
}: ItemProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      routerLink={<Link href={to} />}
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        [`.${menuClasses.button}`]: {
          color: colors.primary[100],
          paddingLeft: isCollapsed ? undefined : "15%",
          "&:hover": {
            backgroundColor: colors.grey[600],
          },
          backgroundColor:
            selected === title ? colors.grey[600] : colors.primary[400],
        },
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SidebarComponent = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Sidebar
      defaultCollapsed={isCollapsed}
      width={isCollapsed ? "100px" : "300px"}
      backgroundColor={colors.primary[400]}
      rootStyles={{
        borderRight: "none",
        height: "100vh",
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlined /> : undefined}
          rootStyles={{
            [`.${menuClasses.button}`]: {
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              "&:hover": {
                color: colors.grey[100],
                backgroundColor: colors.primary[400],
              },
            },
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              ml="15px"
            >
              <Typography variant="h3">ADMINS</Typography>
              <IconButton>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent={"center"} alignItems="center">
              <Image
                src={"/assets/user.png"}
                alt="user"
                width={75}
                height={100}
                style={{
                  marginTop: "15px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box textAlign={"center"}>
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight={"bold"}
                sx={{
                  m: "10px 0 0 0",
                }}
              >
                Andy Setyawan
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP of Software Engineering
              </Typography>
            </Box>
          </Box>
        )}

        <Box>
          <Item
            isCollapsed={isCollapsed}
            title="Dashboard"
            to="/"
            icon={<HomeOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              m: isCollapsed ? "15px 5px" : "15px 0 5px 32px",
              textAlign: isCollapsed ? "center" : undefined,
            }}
          >
            Data
          </Typography>
          <Item
            isCollapsed={isCollapsed}
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Invoices Balance"
            to="/invoices"
            icon={<ReceiptOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              m: isCollapsed ? "15px 5px" : "15px 0 5px 32px",
              textAlign: isCollapsed ? "center" : undefined,
            }}
          >
            Pages
          </Typography>
          <Item
            isCollapsed={isCollapsed}
            title="Profile Form"
            to="/form"
            icon={<PersonOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{
              m: isCollapsed ? "15px 5px" : "15px 0 5px 32px",
              textAlign: isCollapsed ? "center" : undefined,
            }}
          >
            Charts
          </Typography>
          <Item
            isCollapsed={isCollapsed}
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            isCollapsed={isCollapsed}
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlined />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  )
}

export default SidebarComponent
