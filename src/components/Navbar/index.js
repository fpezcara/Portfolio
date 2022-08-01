import React from "react";
import { Link } from "react-router-dom";
import { HStack, Flex, Stack, Heading, Text } from "@chakra-ui/react";
import "./style.css";

const Navbar = () => {
  return (
    <HStack as="nav" bg={"purple.300"} justify="space-between">
      <Stack direction={["column"]} spacing="24px" p={6}>
        <Heading as="h1" fontSize="3xl">
          Florencia Pezcara
        </Heading>
        <Text fontSize="xl">Junior Frontend Developer</Text>
      </Stack>
      <Flex width={400} as="ul" id="nav-list" justify={"space-between"} p={3}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Flex>
    </HStack>
  );
};

export default Navbar;
