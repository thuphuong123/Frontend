import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <Box bg="teal.500" py={4}>
      <Flex maxW="container.xl" mx="auto" justify="space-between" align="center" px={4}>
        <Heading as="h1" size="lg" color="white">
          <Link to="/">My Blog</Link>
        </Heading>
        <Button as={Link} to="/new" colorScheme="whiteAlpha" leftIcon={<FaPencilAlt />}>
          New Post
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;

