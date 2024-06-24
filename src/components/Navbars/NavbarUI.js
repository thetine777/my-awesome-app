/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { isMobile } from "react-device-detect";

class NavbarUI extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    const MENUS = [
      {
        label: 'HOME',
        link: '/',
      },
      {
        label: 'SHOWROOM',
        link: '/',
      },
      {
        label: 'OUR TEAM',
        link: '/',
      },
      {
        label: 'ABOUT',
        link: '/',
      },
      {
        label: 'TESTIMONIALS',
        link: '/',
      },
      {
        label: 'VIDEOS',
        link: '/',
      },
    ]
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/kia-logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">

                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {
                    isMobile ?
                      <NavItem>
                        {
                          MENUS.map((e, i) => (
                            <NavLink
                              key={i}
                              className="nav-link-icon"
                              href=""
                              id=""
                            >
                              <span className="nav-link-inner--text d-lg-none ml-2">
                                {e.label}
                              </span>
                            </NavLink>
                          ))
                        }
                      </NavItem>
                      :
                      <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                          <i className="ni ni-collection d-lg-none mr-1" />
                          <span className="nav-link-inner--text">Menus</span>
                        </DropdownToggle>
                        <DropdownMenu>
                          {
                            MENUS.map((e, i) => (
                              <DropdownItem key={i} to={e.link} tag={Link}>
                                {e.label}
                              </DropdownItem>
                            ))
                          }
                        </DropdownMenu>
                      </UncontrolledDropdown>
                  }

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavbarUI;
