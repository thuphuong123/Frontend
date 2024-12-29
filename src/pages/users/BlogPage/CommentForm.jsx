import { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface CommentFormProps {
  postId: number;
  onSubmit: (postId: number, author: string, content: string) => void;
}

export default function CommentForm({ postId, onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kiểm tra nếu author và content không rỗng
    if (author.trim() && content.trim()) {
      onSubmit(postId, author, content);
      setAuthor('');
      setContent('');
    } else {
      alert("Both name and comment are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <TextField
          id="author"
          label="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="content"
          label="Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          multiline
          rows={4} // Điều chỉnh số dòng của Textarea
          fullWidth
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit Comment
      </Button>
    </form>
  );
}
