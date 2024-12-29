import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Image } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import { getPost, updatePost } from '../mockDatabase';

const EditBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null); // Correct use of useRef

  useEffect(() => {
    if (id) {
      const post = getPost(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setAuthor(post.author);
        setImageUrl(post.imageUrl || '');
      }
    }
  }, [id]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      updatePost(id, { title, content, author, imageUrl });
      navigate(`/blog/${id}`);
    }
  };

  return (
    <Box bg="white" p={8} borderRadius="lg" shadow="md">
      <Heading as="h1" mb={6}>Edit Blog Post</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} minHeight="200px" />
          </FormControl>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              display="none"
            />
            <Button onClick={() => fileInputRef.current?.click()} leftIcon={<FaUpload />}>
              Upload Image
            </Button>
            {imageUrl && <Image src={imageUrl} alt="Preview" mt={2} maxH="200px" objectFit="cover" />}
          </FormControl>
          <Button type="submit" colorScheme="teal">Save Changes</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EditBlog;
