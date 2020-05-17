import React from "react";
import { NavLink, withRouter } from "react-router-dom";
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
import Routes from "../routers/Routes";

class NavigationBar extends React.Component<any, any> {
  state = { open: false };
  toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    )
      return;

    this.setState({ open: open });
  };

  activeRoute = (routeName: any) => {
    return this.props.location.pathname === routeName ? true : false;
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography>ShopFully</Typography>
            </Toolbar>
          </AppBar>
        </Container>
        <MenuDrawer open={open} onClose={this.toggleDrawer(false)}>
          <ListContainer
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <MenuList>
              {Routes.map((prop: any, key: any) => {
                return (
                  <NavLink
                    to={prop.path}
                    style={{ textDecoration: "none" }}
                    key={key}
                  >
                    <MenuItem selected={this.activeRoute(prop.path)}>
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
  }
}

export default withRouter(NavigationBar);

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  margin-bottom: 15px;
`;
const MenuDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 300px;
  }
`;

const ListContainer = styled.div`
  width: auto;
`;
