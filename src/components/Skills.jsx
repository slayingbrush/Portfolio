import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaReact, FaNode, FaPython, FaJava, FaGitAlt, FaDocker,
  FaAws, FaJs, FaHtml5, FaCss3Alt, FaDatabase
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiKubernetes } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 90 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'Java', icon: <FaJava />, level: 80 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'Redis', icon: <SiRedis />, level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d3748]">
            Skills & Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#B7C2B6] hover:border-[#A77E58] transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <h3 className="text-3xl font-bold mb-6 text-[#2d3748]">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const colors = ['#80A1C1', '#A77E58', '#B15F3B', '#BA3F1D']
                  const color = colors[categoryIndex % colors.length]
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl" style={{ color }}>{skill.icon}</span>
                          <span className="text-[#2d3748] font-bold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-[#2d3748] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#D9CFC1] rounded-full h-4 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                          className="h-full rounded-full shadow-lg"
                          style={{ background: `linear-gradient(90deg, ${color}, ${colors[(categoryIndex + 1) % colors.length]})` }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

