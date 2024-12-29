import { v4 as uuidv4 } from 'uuid';

export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
  comments: Comment[];
  createdAt: Date;
}

let blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to our Blog",
    content: "This is our first blog post. We're excited to share our thoughts with you!",
    author: "Admin",
    comments: [],
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Understanding TypeScript",
    content: "TypeScript is a superset of JavaScript that adds static typing. Let's explore how it works.",
    author: "Jane Doe",
    comments: [
      {
        id: 1,
        content: "Great article! I love how you explained the basics.",
        author: "John Smith",
        createdAt: new Date(),
      },
      {
        id: 2,
        content: "Looking forward to more TypeScript tutorials!",
        author: "Alice Brown",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "React vs Angular: Which one to choose?",
    content: "React and Angular are two of the most popular JavaScript frameworks. Let's compare them.",
    author: "Admin",
    comments: [],
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Introduction to Node.js",
    content: "Node.js allows us to run JavaScript on the server. In this post, we’ll explore its features.",
    author: "Mike Ross",
    comments: [
      {
        id: 1,
        content: "Node.js is amazing! I use it in all my backend projects.",
        author: "James Carter",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Mastering CSS Grid",
    content: "CSS Grid is a powerful layout system in CSS. Learn how to create complex layouts easily.",
    author: "Sarah Lee",
    comments: [
      {
        id: 1,
        content: "CSS Grid has completely changed the way I build layouts.",
        author: "Tom White",
        createdAt: new Date(),
      },
      {
        id: 22,
        content: "Thank you for this tutorial! I was struggling with layouts before.",
        author: "Emma Green",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },
];

export const getPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const addPost = (post: Omit<BlogPost, 'id' | 'comments' | 'createdAt'>): BlogPost => {
  const newPost: BlogPost = {
    ...post,
    id: uuidv4(),
    comments: [],
    createdAt: new Date(),
  };
  blogPosts.push(newPost);
  return newPost;
};

export const updatePost = (id: string, updatedPost: Partial<BlogPost>): BlogPost | undefined => {
  const index = blogPosts.findIndex(post => post.id === id);
  if (index !== -1) {
    blogPosts[index] = { ...blogPosts[index], ...updatedPost };
    return blogPosts[index];
  }
  return undefined;
};

export const addComment = (postId: string, comment: Omit<Comment, 'id' | 'createdAt'>): Comment | undefined => {
  const post = blogPosts.find(post => post.id === postId);
  if (post) {
    const newComment: Comment = {
      ...comment,
      id: uuidv4(),
      createdAt: new Date(),
    };
    post.comments.push(newComment);
    return newComment;
  }
  return undefined;
};

