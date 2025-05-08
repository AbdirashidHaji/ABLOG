import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { posts } from '../data/posts';

const SinglePost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <img 
        src={post.coverImage} 
        alt={post.title}
        className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
      />
      
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            code({  inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match?.[1] || 'javascript'}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default SinglePost;