'use client'

import { useState } from 'react'
import NewBlogForm from './NewBlogForm'
import BlogList from './BlogList'
import { BlogPost, getPosts, addPost, addComment } from './mockDatabase'

export default function BlogPage() {
  const [posts, setPosts] = useState(getPosts())

  const handleNewPost = (post: Omit<BlogPost, 'id' | 'createdAt' | 'comments'>) => {
    const newPost = addPost(post)
    setPosts([newPost, ...posts])
  }

  const handleNewComment = (postId: number, author: string, content: string) => {
    const updatedPost = addComment(postId, { author, content })
    setPosts(posts.map(post => post.id === postId ? updatedPost : post))
  }

  return (
    <div className="space-y-12">
      <NewBlogForm onSubmit={handleNewPost} />
      <BlogList posts={posts} onNewComment={handleNewComment} />
    </div>
  )
}

