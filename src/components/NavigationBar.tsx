import React, { useState } from "react";

import { NavLink, withRouter } from "react-router-dom";
import Routes from "../routers/Routes";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const NavigationBar: React.FC = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  };

  return (
    <div>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography>ShopFully</Typography>
          </Toolbar>
        </AppBar>
      </Container>
      <MenuDrawer open={isOpen} onClose={toggleDrawer(false)}>
        <ListContainer
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink
                  to={prop.path}
                  style={{ textDecoration: "none" }}
                  key={key}
                >
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </ListContainer>
      </MenuDrawer>
    </div>
  );
};

export default withRouter(NavigationBar);

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 300px;
  }
`;

const ListContainer = styled.div`
  width: auto;
`;
