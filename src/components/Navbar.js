import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styleSheet = {
  list: {
    width: window.innerWidth / 1.5,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },

  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }

  //Small Screens
  createDrawer() {
    return (
      <div>
        <AppBar style={{ backgroundColor: "#FFFFFF" }} className="heading-text">
          <Toolbar style={{ height: "100px" }}>
            <Grid
              container
              direction="row"
              // justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                style={{ color: "navy" }}
                onClick={() => {
                  this.setState({ drawer: true });
                }}
              />

              <Typography
                color="inherit"
                variant="h5"
                className="mx-auto heading-text"
                style={{ fontFamily: "Quicksand" }}
              >
                <strong>
                  <a
                    href="#home-section"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {" "}
                    TUR
                  </a>
                </strong>
              </Typography>
              <Typography color="inherit" variant="headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false });
          }}
          onOpen={() => {
            this.setState({ drawer: true });
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false });
            }}
            onKeyDown={() => {
              this.setState({ drawer: false });
            }}
          >
            <List className={this.props.classes.list} style={{ color: "navy" }}>
              <ListItem key={1} button divider>
                <Typography
                  color="inherit"
                  variant="h6"
                  className="mx-auto heading-text"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <strong>
                    <a
                      href="#home-section"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {" "}
                      TUR
                    </a>
                  </strong>
                </Typography>
              </ListItem>
              <ListItem key={2} button divider>
                <a
                  href="#services-section"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Services
                </a>
              </ListItem>
              <ListItem key={3} button divider>
                <a
                  href="#portfolio-section"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Portfolio
                </a>
              </ListItem>
              <ListItem key={3} button divider>
                <a
                  href="#testimonials-section"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Badge color="secondary" badgeContent={0} showZero>
                    <ShoppingCartIcon />
                  </Badge>
                </a>
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  //Larger Screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <AppBar
        style={{ backgroundColor: "#FFFFFF", fontFamily: "Quicksand" }}
        className="heading-text"
      >
        <Toolbar style={{ height: "100px" }}>
          <Typography
            variant="h4"
            style={{ flexGrow: 1, marginLeft: "70px", fontFamily: "Quicksand" }}
            color="inherit"
          >
            <strong>
              <a
                href="#home-section"
                style={{ color: "navy", textDecoration: "none" }}
              >
                {" "}
                TUR
              </a>
            </strong>
          </Typography>
          <Typography
            variant="subheading"
            className={classes.padding}
            color="inherit"
          >
            <strong>
              <a
                href="#services-section"
                style={{ color: "navy", textDecoration: "none" }}
              >
                Services
              </a>
            </strong>
          </Typography>
          <Typography
            variant="subheading"
            className={classes.padding}
            color="inherit"
          >
            <strong>
              <a
                href="#portfolio-section"
                style={{ color: "navy", textDecoration: "none" }}
              >
                Portfolio
              </a>
            </strong>
          </Typography>
          <Typography
            variant="subheading"
            className={classes.padding}
            color="inherit"
          >
            <strong>
              <a
                href="#testimonials-section"
                style={{ color: "navy", textDecoration: "none" }}
              >
                <Badge color="secondary" badgeContent={0} showZero>
                  <ShoppingCartIcon />
                </Badge>
              </a>
            </strong>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Navbar);
