import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, Input, Textarea } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { FormLabel } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface Comment {
  id: number;
  content: string;
  author: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  comments: Comment[];
}

const BlogPage: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comment, setComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<BlogPost>(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/posts/${id}/comments`, { content: comment, author: commentAuthor });
      setPost(prevPost => prevPost ? { ...prevPost, comments: [...prevPost.comments, response.data] } : null);
      setComment('');
      setCommentAuthor('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (!post) return <Box>Loading...</Box>;

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" mb={2}>{post.title}</Heading>
      <Text fontStyle="italic" mb={4}>By: {post.author || 'Anonymous'}</Text>
      <Box mb={4}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Box>
      <Button as={Link} to={`/edit/${post.id}`} colorScheme="teal" mb={4}>Edit Post</Button>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="md">Comments</Heading>
        <form onSubmit={handleCommentSubmit}>
          <FormControl mb={2}>
            <FormLabel>Your Name</FormLabel>
            <Input value={commentAuthor} onChange={(e) => setCommentAuthor(e.target.value)} />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel>Comment</FormLabel>
            <Textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Add Comment</Button>
        </form>
        {post.comments.map((comment) => (
          <Box key={comment.id} borderWidth={1} borderRadius="lg" p={2}>
            <Text>{comment.content}</Text>
            <Text fontStyle="italic">By: {comment.author || 'Anonymous'}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogPage;

