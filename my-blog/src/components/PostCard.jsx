import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
    <img 
      src={post.coverImage} 
      alt={post.title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <Link
        to={`/articles/${post.id}`}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read More →
      </Link>
    </div>
  </div>
);

export default PostCard;