import "../vendors/css/vendor.bundle.base.css";
import "../vendors/simple-line-icons/css/simple-line-icons.css";
import "../vendors/typicons/typicons.css";
import "../vendors/ti-icons/css/themify-icons.css";
import "../vendors/mdi/css/materialdesignicons.min.css";
import "../vendors/feather/feather.css";
import "../css/vertical-layout-light/style.css";
// import "../vendors/js/vendor.bundle.base.js";
// import "../css/vertical-layout-light/style.css";
// import "../css/vertical-layout-light/style.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";
import {
  NavLink,
  Link,
  Routes,
  Route,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import ArtistForm from "./artist/artistForm";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DashBoard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
    // setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="container-scroller">
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                onClick={handleDrawerOpen}
                data-bs-toggle="minimize"
              >
                <span className="icon-menu"></span>
                {/* <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  // sx={{
                  //   marginRight: 5,
                  //   ...(!open && { display: "none" }),
                  // }}
                >
                  <MenuIcon />
                </IconButton> */}
              </button>
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                // sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton> */}
            </div>
            <div>
              <a className="navbar-brand brand-logo" href="index.html">
                <img src="images/logo.svg" alt="logo" />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="images/logo-mini.svg" alt="logo" />
              </a>
            </div>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-top">
            <ul class="navbar-nav">
              <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
                <h1 class="welcome-text">
                  Good Morning, <span class="text-black fw-bold">John Doe</span>
                </h1>
                <h3 class="welcome-sub-text">
                  Your performance summary this week{" "}
                </h3>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown d-none d-lg-block">
                <a
                  class="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                  id="messageDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Select Category{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                  aria-labelledby="messageDropdown"
                >
                  <a class="dropdown-item py-3">
                    <p class="mb-0 font-weight-medium float-left">
                      Select category
                    </p>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        Bootstrap Bundle{" "}
                      </p>
                      <p class="fw-light small-text mb-0">
                        This is a Bundle featuring 16 unique dashboards
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        Angular Bundle
                      </p>
                      <p class="fw-light small-text mb-0">
                        Everything you’ll ever need for your Angular projects
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        VUE Bundle
                      </p>
                      <p class="fw-light small-text mb-0">
                        Bundle of 6 Premium Vue Admin Dashboard
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        React Bundle
                      </p>
                      <p class="fw-light small-text mb-0">
                        Bundle of 8 Premium React Admin Dashboard
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li class="nav-item d-none d-lg-block">
                <div
                  id="datepicker-popup"
                  class="input-group date datepicker navbar-date-picker"
                >
                  <span class="input-group-addon input-group-prepend border-right">
                    <span class="icon-calendar input-group-text calendar-icon"></span>
                  </span>
                  <input type="text" class="form-control" />
                </div>
              </li>
              <li class="nav-item">
                <form class="search-form" action="#">
                  <i class="icon-search"></i>
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search Here"
                    title="Search here"
                  />
                </form>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link count-indicator"
                  id="notificationDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i class="icon-mail icon-lg"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                  aria-labelledby="notificationDropdown"
                >
                  <a class="dropdown-item py-3 border-bottom">
                    <p class="mb-0 font-weight-medium float-left">
                      You have 4 new notifications{" "}
                    </p>
                    <span class="badge badge-pill badge-primary float-right">
                      View all
                    </span>
                  </a>
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject fw-normal text-dark mb-1">
                        Application Error
                      </h6>
                      <p class="fw-light small-text mb-0"> Just now </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject fw-normal text-dark mb-1">
                        Settings
                      </h6>
                      <p class="fw-light small-text mb-0"> Private message </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item py-3">
                    <div class="preview-thumbnail">
                      <i class="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject fw-normal text-dark mb-1">
                        New user registration
                      </h6>
                      <p class="fw-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link count-indicator"
                  id="countDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="icon-bell"></i>
                  <span class="count"></span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                  aria-labelledby="countDropdown"
                >
                  <a class="dropdown-item py-3">
                    <p class="mb-0 font-weight-medium float-left">
                      You have 7 unread mails{" "}
                    </p>
                    <span class="badge badge-pill badge-primary float-right">
                      View all
                    </span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img
                        src="images/faces/face10.jpg"
                        alt="image"
                        class="img-sm profile-pic"
                      />
                    </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        Marian Garner{" "}
                      </p>
                      <p class="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img
                        src="images/faces/face12.jpg"
                        alt="image"
                        class="img-sm profile-pic"
                      />
                    </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        David Grey{" "}
                      </p>
                      <p class="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </a>
                  <a class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <img
                        src="images/faces/face1.jpg"
                        alt="image"
                        class="img-sm profile-pic"
                      />
                    </div>
                    <div class="preview-item-content flex-grow py-2">
                      <p class="preview-subject ellipsis font-weight-medium text-dark">
                        Travis Jenkins{" "}
                      </p>
                      <p class="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown d-none d-lg-block user-dropdown">
                <a
                  class="nav-link"
                  id="UserDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    class="img-xs rounded-circle"
                    src="images/faces/face8.jpg"
                    alt="Profile image"
                  />{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="UserDropdown"
                >
                  <div class="dropdown-header text-center">
                    <img
                      class="img-md rounded-circle"
                      src="images/faces/face8.jpg"
                      alt="Profile image"
                    />
                    <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                    <p class="fw-light text-muted mb-0">
                      allenmoreno@gmail.com
                    </p>
                  </div>
                  <a class="dropdown-item">
                    <i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                    My Profile{" "}
                    <span class="badge badge-pill badge-danger">1</span>
                  </a>
                  <a class="dropdown-item">
                    <i class="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>{" "}
                    Messages
                  </a>
                  <a class="dropdown-item">
                    <i class="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>{" "}
                    Activity
                  </a>
                  <a class="dropdown-item">
                    <i class="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>{" "}
                    FAQ
                  </a>
                  <a class="dropdown-item">
                    <i class="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                    Sign Out
                  </a>
                </div>
              </li>
            </ul>
            <button
              class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              onClick={handleDrawerOpen}
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
          <div className="theme-setting-wrapper">
            <div id="settings-trigger">
              <i className="ti-settings"></i>
            </div>
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close ti-close"></i>
              <p className="settings-heading">SIDEBAR SKINS</p>
              <div
                className="sidebar-bg-options selected"
                id="sidebar-light-theme"
              >
                <div className="img-ss rounded-circle bg-light border me-3"></div>
                Light
              </div>
              <div className="sidebar-bg-options" id="sidebar-dark-theme">
                <div className="img-ss rounded-circle bg-dark border me-3"></div>
                Dark
              </div>
              <p className="settings-heading mt-2">HEADER SKINS</p>
              <div className="color-tiles mx-0 px-4">
                <div className="tiles success"></div>
                <div className="tiles warning"></div>
                <div className="tiles danger"></div>
                <div className="tiles info"></div>
                <div className="tiles dark"></div>
                <div className="tiles default"></div>
              </div>
            </div>
          </div>
          <div id="right-sidebar" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <ul
              className="nav nav-tabs border-top"
              id="setting-panel"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="todo-tab"
                  data-bs-toggle="tab"
                  href="#todo-section"
                  role="tab"
                  aria-controls="todo-section"
                  aria-expanded="true"
                >
                  TO DO LIST
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="chats-tab"
                  data-bs-toggle="tab"
                  href="#chats-section"
                  role="tab"
                  aria-controls="chats-section"
                >
                  CHATS
                </a>
              </li>
            </ul>
            <div className="tab-content" id="setting-content">
              <div
                className="tab-pane fade show active scroll-wrapper"
                id="todo-section"
                role="tabpanel"
                aria-labelledby="todo-section"
              >
                <div className="add-items d-flex px-3 mb-0">
                  <form className="form w-100">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control todo-list-input"
                        placeholder="Add To-do"
                      />
                      <button
                        type="submit"
                        className="add btn btn-primary todo-list-add-btn"
                        id="add-task"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
                <div className="list-wrapper px-3">
                  <ul className="d-flex flex-column-reverse todo-list">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Team review meeting at 3.00 PM
                        </label>
                      </div>
                      <i className="remove ti-close"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Prepare for presentation
                        </label>
                      </div>
                      <i className="remove ti-close"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Resolve all the low priority tickets due today
                        </label>
                      </div>
                      <i className="remove ti-close"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" checked />
                          Schedule meeting for next week
                        </label>
                      </div>
                      <i className="remove ti-close"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" checked />
                          Project review
                        </label>
                      </div>
                      <i className="remove ti-close"></i>
                    </li>
                  </ul>
                </div>
                <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2"></i>
                    <span>Feb 11 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">
                    Creating component page build a js
                  </p>
                  <p className="text-gray mb-0">The total number of sessions</p>
                </div>
                <div className="events pt-4 px-3">
                  <div className="wrapper d-flex mb-2">
                    <i className="ti-control-record text-primary me-2"></i>
                    <span>Feb 7 2018</span>
                  </div>
                  <p className="mb-0 font-weight-thin text-gray">
                    Meeting with Alisa
                  </p>
                  <p className="text-gray mb-0 ">Call Sarah Graves</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="chats-section"
                role="tabpanel"
                aria-labelledby="chats-section"
              >
                <div className="d-flex align-items-center justify-content-between border-bottom">
                  <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                    Friends
                  </p>
                  <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">
                    See All
                  </small>
                </div>
                <ul className="chat-list">
                  <li className="list active">
                    <div className="profile">
                      <img src="images/faces/face1.jpg" alt="image" />
                      <span className="online"></span>
                    </div>
                    <div className="info">
                      <p>Thomas Douglas</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">19 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="images/faces/face2.jpg" alt="image" />
                      <span className="offline"></span>
                    </div>
                    <div className="info">
                      <div className="wrapper d-flex">
                        <p>Catherine</p>
                      </div>
                      <p>Away</p>
                    </div>
                    <div className="badge badge-success badge-pill my-auto mx-2">
                      4
                    </div>
                    <small className="text-muted my-auto">23 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="images/faces/face3.jpg" alt="image" />
                      <span className="online"></span>
                    </div>
                    <div className="info">
                      <p>Daniel Russell</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">14 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="images/faces/face4.jpg" alt="image" />
                      <span className="offline"></span>
                    </div>
                    <div className="info">
                      <p>James Richardson</p>
                      <p>Away</p>
                    </div>
                    <small className="text-muted my-auto">2 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="images/faces/face5.jpg" alt="image" />
                      <span className="online"></span>
                    </div>
                    <div className="info">
                      <p>Madeline Kennedy</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">5 min</small>
                  </li>
                  <li className="list">
                    <div className="profile">
                      <img src="images/faces/face6.jpg" alt="image" />
                      <span className="online"></span>
                    </div>
                    <div className="info">
                      <p>Sarah Graves</p>
                      <p>Available</p>
                    </div>
                    <small className="text-muted my-auto">47 min</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Drawer
            className="sidebar sidebar-offcanvas"
            elevation={6}
            variant="permanent"
            id="sidebar"
            open={open}
          >
            <nav className="sidebar sidebar-offcanvas ">
              {/* <Drawer
            className="sidebar sidebar-offcanvas"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          > */}

              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item nav-category">View Status</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#ui-basic1"
                    aria-expanded="false"
                    aria-controls="ui-basic1"
                  >
                    <i className="menu-icon mdi mdi-floor-plan"></i>
                    <span className="menu-title">Artists</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="ui-basic1">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="listArtists">
                          List Artists
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <NavLink className="nav-link" to="listAlbum">
                          List Album
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#uiw-basic2x"
                    aria-expanded="false"
                    aria-controls="uiw-basic2x"
                  >
                    <i className="menu-icon mdi mdi-floor-plan"></i>
                    <span className="menu-title">Podcasts</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="uiw-basic2x">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/buttons.html"
                        >
                          List Podcast
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#uiw-basic2x3"
                    aria-expanded="false"
                    aria-controls="uiw-basic2x3"
                  >
                    <i className="menu-icon mdi mdi-floor-plan"></i>
                    <span className="menu-title">Track[Music]</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="uiw-basic2x3">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <NavLink to="listTrack" className="nav-link">
                          List Track
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#uiw-basic2x34"
                    aria-expanded="false"
                    aria-controls="uiw-basic2x34"
                  >
                    <i className="menu-icon mdi mdi-floor-plan"></i>
                    <span className="menu-title">FM</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="uiw-basic2x34">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/buttons.html"
                        >
                          List FM
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">Management</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="menu-icon mdi mdi-card-text-outline"></i>
                    <span className="menu-title">Artists</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addArtist">
                          Add Artist
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addAlbum">
                          Add Album
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/editArtistList">
                          Edit Artist
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#charts"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="menu-icon mdi mdi-chart-line"></i>
                    <span className="menu-title">Podcast</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/charts/chartjs.html"
                        >
                          Add Podcast
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/charts/chartjs.html"
                        >
                          Edit Podcast
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#tables"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="menu-icon mdi mdi-table"></i>
                    <span className="menu-title">Track[Music]</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <NavLink to="addTrack" className="nav-link">
                          Add Track
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <NavLink to="/editTrack" className="nav-link">
                          Edit Track
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="menu-icon mdi mdi-layers-outline"></i>
                    <span className="menu-title">FM</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Add FM
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Edit FM
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#icons2"
                    aria-expanded="false"
                    aria-controls="icons2"
                  >
                    <i className="menu-icon mdi mdi-layers-outline"></i>
                    <span className="menu-title">Other Managment</span>
                    <i className="menu-arrow"></i>
                  </a>
                  <div className="collapse" id="icons2">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Add Encoder
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Add Genere
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li className="nav-item nav-category">pages</li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#auth"
                  aria-expanded="false"
                  aria-controls="auth"
                >
                  <i className="menu-icon mdi mdi-account-circle-outline"></i>
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="pages/samples/login.html">
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-category">help</li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"
                >
                  <i className="menu-icon mdi mdi-file-document"></i>
                  <span className="menu-title">Documentation</span>
                </a>
              </li> */}
              </ul>
            </nav>
          </Drawer>

          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet />
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Premium{" "}
                  <a href="https://www.bootstrapdash.com/" target="_blank">
                    Bootstrap admin template
                  </a>{" "}
                  from BootstrapDash.
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                  Copyright © 2021. All rights reserved.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* <!-- plugins:js -->
  <script src="../vendors/js/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page -->
  <script src="../vendors/chart.js/Chart.min.js"></script>
  <script src="../vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
  <script src="../vendors/progressbar.js/progressbar.min.js"></script>

  <!-- End plugin js for this page -->
  <!-- inject:js -->
  <script src="js/off-canvas.js"></script>
  <script src="js/hoverable-collapse.js"></script> 
  <script src="js/template.js"></script>  
  <script src="js/settings.js"></script>
  <script src="js/todolist.js"></script>
  <!-- endinject -->
   <script src="js/jquery.cookie.js" type="text/javascript"></script>
  <script src="js/Dashboard.js"></script>
  <script src="js/Chart.roundedBarCharts.js"></script> */}
    </div>
  );
};
export default DashBoard;
