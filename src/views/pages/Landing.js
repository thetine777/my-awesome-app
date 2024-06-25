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

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import NavbarUI from "components/Navbars/NavbarUI.js";

// index page sections
import CarouselUI from "components/CarouselUI/CarouselUI.js";

import { NavLink } from "react-router-dom";

import './Landing-style.scss'

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <NavbarUI />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <div className="shape shape-style-1 shape-default">
              <CarouselUI />
            </div>
          </div>
          <section>
            <Container>
              <Row className="row-grid align-items-center">
                <Col lg="12" className="mt-5 text-center">
                  <NavLink
                    href="https://maps.app.goo.gl/qtWDY2jPEcHFi4Uu8"
                  // target="_blank"
                  >
                    <h2 className="mb-0 font-weight-bold text">
                      เราเป็นตัวแทนจำหน่ายรถยนต์ เกีย จังหวัดเชียงใหม่
                    </h2 >
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="mt-5">
            <img style={{ width: '100%', height: 'auto' }} src={require("assets/img/theme/car-white.jpg")} alt="" />
          </section>
          <section>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="text-center btn-wrapper mb-3" lg="12">
                  <Button
                    size="lg"
                    className="btn-icon-only rounded-circle"
                    color="default"
                    href="tel:0889419926"
                    id="tooltip475038074"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-phone" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip475038074">
                    0889419926
                  </UncontrolledTooltip>
                  <Button
                    size="lg"
                    className="btn-icon-only rounded-circle ml-1"
                    color="default"
                    href="https://www.facebook.com/profile.php?id=100083399348273&mibextid=LQQJ4d"
                    id="tooltip837440414"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-facebook-square" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip837440414">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    size="lg"
                    className="btn-icon-only rounded-circle ml-1"
                    color="default"
                    id="tooltip837440415"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-email-83"></i>
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip837440415">
                    email
                  </UncontrolledTooltip>
                </Col>
                <Col lg="12" className="mb-5 text-center">
                  <NavLink
                    href="https://maps.app.goo.gl/qtWDY2jPEcHFi4Uu8"
                  // target="_blank"
                  >
                    <h6 className="mb-0 font-weight-light text">
                      <i className="ni ni-pin-3"></i>  239 หมู่7 ถ.เชียงใหม่-ฮอด ต.สุเทพ อ.เมืองเชียงใหม่, Chiang Mai, Thailand, Chiang Mai
                    </h6 >
                  </NavLink>
                </Col>
                <Col lg="12">
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
                    }}
                    src={require("assets/img/theme/bg-car.jpg")} alt=""
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
