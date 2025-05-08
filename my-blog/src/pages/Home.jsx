import Hero from '../components/Hero'
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Articles
        </h2>
        {/* Post previews will go here tomorrow */}
      </div>
    </div>
  )
}

export default Home