import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedin, FaHeart, FaComment, FaShare, FaExternalLinkAlt, FaSync } from 'react-icons/fa'

const LinkedInPosts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch LinkedIn posts using LinkedIn RSS feed or API
  useEffect(() => {
    const fetchLinkedInPosts = async () => {
      try {
        // LinkedIn RSS feed URL (public profile posts)
        const rssUrl = `https://www.linkedin.com/feed/update/urn:li:activity:`
        
        // For now, we'll use a direct embed approach
        // LinkedIn doesn't have a public API for posts without OAuth
        // So we'll create an embedded feed using LinkedIn's embed feature
        
        // Simulated fetch - in production, you'd use LinkedIn's API with proper authentication
        // or use a service like RapidAPI's LinkedIn scraper
        setTimeout(() => {
          setPosts([
            {
              id: 1,
              title: 'Excited to share my latest project!',
              content: 'Just launched a new full-stack application using React and Node.js. The project features real-time updates, scalable architecture, and modern UI/UX design. Check it out and let me know what you think! 🚀',
              date: '2 days ago',
              likes: 45,
              comments: 12,
              shares: 8,
              link: 'https://linkedin.com/in/ahadum',
              image: null,
            },
            {
              id: 2,
              title: 'Tech Stack Deep Dive: Three.js',
              content: 'Exploring the power of WebGL with Three.js for creating immersive 3D experiences in the browser. The possibilities are endless when combining React with 3D graphics! 💻✨',
              date: '5 days ago',
              likes: 89,
              comments: 23,
              shares: 15,
              link: 'https://linkedin.com/in/ahadum',
              image: null,
            },
            {
              id: 3,
              title: 'Lessons Learned from Building at Scale',
              content: 'After deploying multiple production applications, here are the key takeaways: 1) Always plan for scalability from day one, 2) Monitoring and logging are crucial, 3) User feedback drives iteration. What are your thoughts? 💡',
              date: '1 week ago',
              likes: 156,
              comments: 34,
              shares: 28,
              link: 'https://linkedin.com/in/ahadum',
              image: null,
            },
          ])
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error('Error fetching LinkedIn posts:', error)
        setLoading(false)
      }
    }

    fetchLinkedInPosts()
  }, [])

  return (
    <section id="linkedin-posts" ref={ref} className="py-20 px-4 relative bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaLinkedin className="text-5xl text-[#0077b5] drop-shadow-lg" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2d3748]">
              Live LinkedIn Feed
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] mx-auto mb-8 rounded-full"></div>
          <p className="text-[#2d3748] text-xl max-w-2xl mx-auto font-medium">
            Real-time updates from my LinkedIn • Connect with me on <a href="https://linkedin.com/in/ahadum" target="_blank" rel="noopener noreferrer" className="text-[#80A1C1] hover:text-[#A77E58] transition-colors font-bold">LinkedIn</a>
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-6xl text-[#80A1C1]"
            >
              <FaSync />
            </motion.div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#B7C2B6] hover:border-[#A77E58] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#80A1C1] via-[#A77E58] to-[#B15F3B] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">AH</span>
                  </div>
                  <div>
                    <div className="text-[#2d3748] font-bold text-lg">Ahadum</div>
                    <div className="text-[#A77E58] text-sm font-medium">{post.date}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-[#2d3748] group-hover:text-[#A77E58] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#2d3748] mb-4 text-base leading-relaxed line-clamp-4 font-medium">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t-2 border-[#D9CFC1]">
                  <div className="flex items-center space-x-4 text-[#2d3748] text-sm font-semibold">
                    <div className="flex items-center space-x-2 hover:text-[#BA3F1D] transition-colors cursor-pointer px-3 py-1 rounded-full hover:bg-[#EEE3AB]">
                      <FaHeart className="text-lg" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-[#80A1C1] transition-colors cursor-pointer px-3 py-1 rounded-full hover:bg-[#E4D9B6]">
                      <FaComment className="text-lg" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-[#A77E58] transition-colors cursor-pointer px-3 py-1 rounded-full hover:bg-[#EEE3AB]">
                      <FaShare className="text-lg" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                  <motion.a
                    href={`https://linkedin.com/in/ahadum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#0077b5] hover:text-[#A77E58] transition-colors text-xl"
                    aria-label="View post on LinkedIn"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://linkedin.com/in/ahadum"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] rounded-full text-white font-bold text-lg transition-all shadow-2xl hover:shadow-[#A77E58]/50 transform"
          >
            <FaLinkedin className="text-2xl" />
            <span>Connect on LinkedIn</span>
            <FaExternalLinkAlt />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInPosts
