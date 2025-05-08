export const posts = [
  {
    id: 1,
    title: "React Hooks Explained",
    excerpt: "Master useState, useEffect in 5 minutes",
    content: `
# React Hooks Guide

React Hooks allow you to use state and other React features without writing a class.

## useState Example

\`\`\`js
const [count, setCount] = useState(0);
\`\`\`

## useEffect Example

\`\`\`js
useEffect(() => {
  console.log('Component mounted or count changed');
}, [count]);
\`\`\`

## Key Rules
- Only call hooks at the top level
- Only call hooks from React functions
- Use dependencies array wisely with useEffect
`,
    date: "2023-11-15",
    tags: ["react", "javascript"],
    coverImage: "/images/react-cover.png"
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    excerpt: "Utility-first CSS techniques",
    content: `
# Tailwind CSS Tips

Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.

## Responsive Design
Use responsive prefixes like:
\`\`\`html
<div class="text-center md:text-left"></div>
\`\`\`

## Customizing Theme
You can customize your theme in the tailwind.config.js file.

## Useful Utilities
- \`mt-4\` adds margin-top
- \`flex\`, \`grid\` for layout
- \`bg-blue-500\` for background color
`,
    date: "2023-11-10",
    tags: ["css", "tailwind"],
    coverImage: "/images/tailwind-cover.png"
  },
  {
    id: 3,
    title: "Node.js Best Practices",
    excerpt: "Optimize your Node.js applications",
    content: `
# Node.js Best Practices

Node.js is a powerful tool for building backend services. Here are some best practices:

## Use Async/Await
Always use async/await instead of callbacks for cleaner code.

## Structure Your App
Organize code into folders like routes, controllers, services.

## Use Environment Variables
Store sensitive data in .env files and use \`process.env\` to access.

## Logging
Use logging libraries like Winston or Morgan.

## Error Handling
Always handle errors using try/catch blocks and centralized error middleware.
`,
    date: "2023-11-05",
    tags: ["node", "javascript"],
    coverImage: "/images/node.png"
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    excerpt: "Type safety in JavaScript",
    content: `
# Understanding TypeScript

TypeScript adds static typing to JavaScript.

## Basic Types
\`\`\`ts
let age: number = 30;
let isAdmin: boolean = true;
let username: string = 'John';
\`\`\`

## Interfaces
\`\`\`ts
interface User {
  name: string;
  age: number;
}
\`\`\`

## Benefits
- Early error detection
- Better tooling and autocomplete
- Improved readability and maintainability
`,
    date: "2023-10-30",
    tags: ["typescript", "javascript"],
    coverImage: "/images/typ.png"
  },
  {
    id: 5,
    title: "GraphQL vs REST",
    excerpt: "API design comparison",
    content: `
# GraphQL vs REST

Both GraphQL and REST are used for API design but have fundamental differences.

## REST
- Uses multiple endpoints
- Fixed data structure

## GraphQL
- Single endpoint
- Clients specify exactly what data they need

## When to Use What
- Use REST for simple APIs
- Use GraphQL for complex, relational data needs
`,
    date: "2023-10-25",
    tags: ["graphql", "api"],
    coverImage: "/images/graph.png"
  },
  {
    id: 6,
    title: "CSS Grid Layout",
    excerpt: "Create complex layouts easily",
    content: `
# CSS Grid Layout

CSS Grid is a two-dimensional layout system.

## Basic Example
\`\`\`css
display: grid;
grid-template-columns: repeat(3, 1fr);
\`\`\`

## Grid Areas
\`\`\`css
grid-template-areas:
  "header header"
  "sidebar content";
\`\`\`

## Benefits
- Clean and maintainable layouts
- Easy to create complex structures
`,
    date: "2023-10-20",
    tags: ["css", "grid"],
    coverImage: "/images/css.png"
  },
  {
    id: 7,
    title: "JavaScript ES6 Features",
    excerpt: "New syntax and features",
    content: `
# JavaScript ES6 Features
ES6 introduced several important features in JavaScript.

## Highlights:
- Arrow functions
- let & const
- Template literals
- Destructuring
- Promises and async/await

These additions help write cleaner and more concise code.
    `,
    date: "2023-10-15",
    tags: ["javascript", "es6"],
    coverImage: "/images/js.png"
  },
  {
    id: 8,
    title: "Building REST APIs with Express",
    excerpt: "Create robust APIs with Node.js",
    content: `
# Building REST APIs with Express
Express is a fast, unopinionated framework for Node.js.

## Key Concepts:
- Routing using app.get/post
- Middleware functions
- Connecting to databases like MongoDB

Express simplifies building RESTful services.
    `,
    date: "2023-10-10",
    tags: ["node", "express"],
    coverImage: "/images/ex.png"
  },
  {
    id: 9,
    title: "Vue.js Basics",
    excerpt: "Getting started with Vue.js",
    content: `
# Vue.js Basics
Vue.js is a progressive JavaScript framework for building UIs.

## Features:
- Template-based syntax
- Reactivity system
- Component-based structure

Vue is easy to integrate and has a gentle learning curve.
    `,
    date: "2023-10-05",
    tags: ["vue", "javascript"],
    coverImage: "/images/vue.png"
  },
  {
    id: 10,
    title: "Django for Beginners",
    excerpt: "Web development with Python",
    content: `
# Django for Beginners
Django is a high-level Python web framework.

## Benefits:
- Built-in admin panel
- ORM for database operations
- Follows DRY and MVC principles

Great for rapid backend development with Python.
    `,
    date: "2023-09-30",
    tags: ["python", "django"],
    coverImage: "/images/jang.png"
  },
  {
    id: 11,
    title: "Introduction to Docker",
    excerpt: "Containerization made easy",
    content: `
# Introduction to Docker
Docker enables creating lightweight containers for applications.

## Key Concepts:
- Dockerfiles for image creation
- Containers and Images
- Docker Compose for multi-container apps

Docker simplifies app deployment and scaling.
    `,
    date: "2023-09-25",
    tags: ["docker", "devops"],
    coverImage: "/images/doc.png"
  },
  {
    id: 12,
    title: "Understanding Asynchronous JavaScript",
    excerpt: "Callbacks, Promises, and Async/Await",
    content: `
# Understanding Asynchronous JavaScript
JavaScript handles async tasks via the event loop.

## Techniques:
- Callbacks: function passed as argument
- Promises: better syntax and error handling
- Async/Await: modern, readable async code

Mastering async is essential for modern JS applications.
    `,
    date: "2023-09-20",
    tags: ["javascript", "async"],
    coverImage: "/images/promis.png"
  }
];

