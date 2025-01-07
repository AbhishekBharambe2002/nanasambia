import React from 'react';
import { Box, Heading, Text, Button, Input, Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box bg="orange.100" minH="100vh" p={4}>
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" color="gray.700">
          Nanasambia Community
        </Heading>
        <Text fontSize="lg" color="gray.500" mt={4}>
          Community Application
        </Text>
      </Box>

      <Flex justify="space-between" align="center" px={10} py={6} bg="white" borderRadius="lg" boxShadow="md">
        <Input placeholder="Search" size="lg" borderColor="gray.300" />
        <Button colorScheme="blue" size="lg">
          Login / Sign Up
        </Button>
      </Flex>

      <Box px={10} mt={8}>
        <Heading as="h2" size="lg" mb={6} color="gray.700">
          Categories
        </Heading>
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="md" color="gray.600">
            Flutter Applications
          </Heading>
          <Text mt={2} color="gray.500">
            Describe your forum category. Engage your audience and entice them.
          </Text>
          <Flex justify="space-between" align="center" mt={4}>
            <Text fontSize="sm" color="gray.400">
              3 Posts
            </Text>
            <Button size="sm" colorScheme="blue">
              Follow
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
