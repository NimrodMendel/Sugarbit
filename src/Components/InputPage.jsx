import React from "react";
import { Navbar } from 'react-bootstrap';
import SugarBitForm from "./SugarBitForm";


export default function InputPage() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">Sugarbit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome to Sugarbit!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <SugarBitForm />
    </>

  );
}
