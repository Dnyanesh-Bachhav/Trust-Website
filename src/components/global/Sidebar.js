import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../pages/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Dashboard from "@/pages/admin/Dashboard";
import GalleryUpload from "@/pages/admin/GalleryUpload";

const Item = ({ title, to, icon, selected, setSelected, setComponentData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // <Link href={to}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => {
          setSelected(title)
          setComponentData(to);
        } 
      }
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    // </Link>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [ componentData, setComponentData ] = useState("Dashboard");


  return (
    <div className="flex">

    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      
        <ProSidebar collapsed={isCollapsed}  >
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px" ml="60px" style={{ display: "inline-block" }}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box style={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="Dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />

              {/* <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography> */}
              <Item
                title="Image Gallery"
                to="Gallery"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
              <Item
                title="Events"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
              <Item
                title="Volunteers"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />

              {/* <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography> */}
              <Item
                title="Daily Routine"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
              <Item
                title="Books"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
              <Item
                title="Settings"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />

              {/* <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography> */}
              <Item
                title="Contact us"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                setComponentData={setComponentData}
              />
            </Box>
          </Menu>
        </ProSidebar>

      
      </Box>
      <Box className="flex justify-center align-middle w-full " >
        {
          componentData == "Dashboard" ? <Dashboard/> : null
        }
        {
          componentData == "Gallery" ? <GalleryUpload/> : null
        } 
      </Box>
    </div>
  );
};

export default Sidebar;
