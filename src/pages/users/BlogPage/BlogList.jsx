import { useState } from 'react'
import { BlogPost } from './mockDatabase'
import { Card, CardContent, CardHeader, CardActions, Button } from '@mui/material';
import { Comment as CommentIcon } from '@mui/icons-material'
import CommentForm from './CommentForm'

interface BlogListProps {
  posts: BlogPost[];
  onNewComment: (postId: number, author: string, content: string) => void;
}

export default function BlogList({ posts, onNewComment }: BlogListProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-800">Recent Blog Posts</h2>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} onNewComment={onNewComment} />
      ))}
    </div>
  )
}

function BlogPostItem({ post, onNewComment }: { post: BlogPost; onNewComment: (postId: number, author: string, content: string) => void }) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false)

  return (
    <Card>
      <CardHeader
        title={post.title}
        subheader={`By: ${post.author} | ${post.createdAt.toLocaleDateString()}`}
      />
      <CardContent>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="mb-4 max-h-48 w-full object-cover rounded" />
        )}
        <p className="text-gray-700 line-clamp-3">{post.content}</p>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => setIsCommentsVisible(!isCommentsVisible)}
        >
          <CommentIcon className="mr-2 h-5 w-5" />
          Comments ({post.comments.length})
        </Button>
      </CardActions>
      {isCommentsVisible && (
        <CardContent>
          <h4 className="font-semibold mb-2">Comments</h4>
          {post.comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            <ul className="space-y-2 mb-4">
              {post.comments.map((comment) => (
                <li key={comment.id} className="bg-gray-50 p-2 rounded">
                  <p className="text-sm text-gray-500">{comment.author}</p>
                  <p>{comment.content}</p>
                </li>
              ))}
            </ul>
          )}
          <CommentForm postId={post.id} onSubmit={onNewComment} />
        </CardContent>
      )}
    </Card>
  )
}
