import React from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

export default function TopNavbar() {
  const historyFunc = useHistory();

  const switchPage = (pageName) => {
    historyFunc.push(`/${pageName}`);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SugarBit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">dashboard</Nav.Link>
            <Nav.Link href="#link">Input page</Nav.Link>
            <NavDropdown title="Health Providers" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://www.maccabi4u.co.il/1787-he/Maccabi.aspx"
              >
                Maccabi
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.meuhedet.co.il/en/"
              >
                Meuhedet
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.clalit.co.il/he/info/entitlements/Pages/englishrights.aspx"
              >
                Clalit
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.leumit.co.il/eng/home/"
              >
                Leumit
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99-%D7%A8%D7%A4%D7%95%D7%90%D7%94/"
              >
                IDF Medical Corps
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
