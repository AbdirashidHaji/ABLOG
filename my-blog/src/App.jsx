import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Articles from './pages/Articles'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SinglePost from './pages/SinglePost'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              // Add these routes:
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<SinglePost />} />    
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App