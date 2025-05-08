import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { posts } from '../data/posts';

const Home = () => {
  // Choose 3 or 4 posts by changing this number ▼
  const numberOfFeaturedPosts = 4; // ← Change to 3 if you prefer
  
  // Get latest posts (sorted by date)
  const featuredPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, numberOfFeaturedPosts);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Hero/>
      {/* Featured Posts Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Latest Articles
        </h2>
        
        {/* Responsive Grid (3 or 4 columns) */}
        <div className={`grid grid-cols-1 ${numberOfFeaturedPosts === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
          {featuredPosts.map(post => (
            <div key={post.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <Link to={`/articles/${post.id}`} className="block h-full">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* "View All" Button */}
        {posts.length > numberOfFeaturedPosts && (
          <div className="mt-10 text-center">
            <Link
              to="/articles"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View All Articles ({posts.length})
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;