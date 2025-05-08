import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownRender = ({ content }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({  inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                showLineNumbers
                wrapLines
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm before:content-[''] after:content-['']">
                {children}
              </code>
            );
          },
          h2: ({  ...props }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 border-b pb-2 dark:border-gray-700" {...props} />
          ),
          a: ({  ...props }) => (
            <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
          ),
          blockquote: ({  ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4" {...props} />
          ),
          img: ({  ...props }) => (
            <img className="rounded-lg my-4 mx-auto" {...props} />
          ),
          table: ({  ...props }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full my-4" {...props} />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRender;