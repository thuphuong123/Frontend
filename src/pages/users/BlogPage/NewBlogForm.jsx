import React, { useState, useRef } from 'react';
import { TextField, Button, Card, CardContent, CardHeader } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

interface NewBlogFormProps {
  onSubmit: (post: Omit<BlogPost, 'id' | 'createdAt' | 'comments'>) => void;
}

export default function NewBlogForm({ onSubmit }: NewBlogFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null); // Correct use of useRef

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, author, imageUrl });
    setTitle('');
    setContent('');
    setAuthor('');
    setImageUrl('');
  };

  return (
    <Card>
      <CardHeader title="Create New Blog Post" />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <TextField
              id="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="content"
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              multiline
              rows={4}
              required
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="author"
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              fullWidth
            />
          </div>
          <div>
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              variant="contained"
              startIcon={<UploadIcon />}
            >
              Upload Image
            </Button>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-2 max-h-48 object-cover rounded"
              />
            )}
          </div>
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
