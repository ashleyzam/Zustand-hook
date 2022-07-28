import { Link, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW="0x2">
      <Link fontSize="20px" m={5} colorScheme="blue" as={NavLink} to="/">
        Home
      </Link>
      <Link fontSize="20px" m={5} as={NavLink} to="/favorite">
        Lista de Favoritos
      </Link>
    </Container>
  );
};

export { Navbar };
