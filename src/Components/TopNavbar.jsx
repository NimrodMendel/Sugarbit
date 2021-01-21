import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function TopNavbar() {
  const historyFunc = useHistory();

  const switchPage = (pageName) => {
    historyFunc.push(`/${pageName}`);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <img
              style={{ width: "75px" }}
              src="./images/SugarBitLogo.PNG"
              alt="SugarBit logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                switchPage("InputPage");
              }}
            >
              Risk Calculator
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                switchPage("Dashboard");
              }}
            >
              Dashboard
            </Nav.Link>
            <NavDropdown title="More info " id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  switchPage("InfoPagePreventDiabetes");
                }}
              >
                Ways to Prevent Type 2 Diabetes
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                onClick={() => {
                  switchPage("InfoCopingWithDiabetesDistress");
                }}
              >
                Coping with Diabetes Distress
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Talk to your doctor" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://www.maccabi4u.co.il/1787-he/Maccabi.aspx"
              >
                <img
                  src="./images/MaccabiLogo.png"
                  alt="MaccabiLogo"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Maccabi
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                target="_blank"
                href="https://www.meuhedet.co.il/en/"
              >
                <img
                  src="./images/MeuhedetLogo.jpg"
                  alt="MaccabiLogo"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Meuhedet
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                target="_blank"
                href="https://www.clalit.co.il/he/info/entitlements/Pages/englishrights.aspx"
              >
                <img
                  src="./images/ClalitLogo.png"
                  alt="MaccabiLogo"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Clalit
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                target="_blank"
                href="https://www.leumit.co.il/eng/home/"
              >
                <img
                  src="./images/laomitLogo.PNG"
                  alt="MaccabiLogo"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Leumit
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item
                target="_blank"
                href="https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99-%D7%A8%D7%A4%D7%95%D7%90%D7%94/"
              >
                <img
                  src="./images/IDFLogo.jpg"
                  alt="MaccabiLogo"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                IDF Medical Corps
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant="danger"
            onClick={() => {
              switchPage("");
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
