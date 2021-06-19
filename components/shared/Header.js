import React, { useState } from "react";
import Link from "next/link";

import ReactResizeDetector from "react-resize-detector";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



const Header = ({ user, loading, className }) => {


  return (
    <>
      <Row>
        <Col>
          <img
            src="https://www.blackdiamondfleetwashing.services/wp-content/uploads/2020/05/Logo.png"
            alt=""
          />
        </Col>
        <Col>
          <h2 className="Contact-us-header">
            Fleet Washing Services Contact Us Now
          </h2>
        </Col>
      </Row>

    </>
  );
};

export default Header;
