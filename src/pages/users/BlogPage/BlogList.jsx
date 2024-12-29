import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" mb={4}>Blog Posts</Heading>
      <Button as={Link} to="/new" colorScheme="blue" mb={4}>Create New Post</Button>
      <VStack spacing={4} align="stretch">
        {posts.map((post) => (
          <Box key={post.id} borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="md">{post.title}</Heading>
            <Text>{post.content.substring(0, 100)}...</Text>
            <Text fontStyle="italic">By: {post.author || 'Anonymous'}</Text>
            <HStack mt={2}>
              <Button as={Link} to={`/blog/${post.id}`} colorScheme="teal">View Details</Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogList;

