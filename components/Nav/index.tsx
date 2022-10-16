import * as React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../Logo";

const Nav = () => {
  return (
    <div className="-mx-2">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
