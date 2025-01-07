import React from 'react';
import { Box, Flex,Spacer, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="blue.600" px={6} py={4} color="white">
      <Flex align="center">
        <Heading size="lg">
          <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Heyoo
          </NavLink>
        </Heading>
        <Spacer />
        <Flex gap={4}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'yellow.400' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/faq"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'yellow.400' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/privacy"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'yellow.400' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            Privacy Policy
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
