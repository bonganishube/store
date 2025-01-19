import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import LinkesDropdown from "./LinksDropdown";
import CartButton from "./CartButton";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinkesDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
