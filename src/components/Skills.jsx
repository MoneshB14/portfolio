import { Card, CardContent } from "./ui/card"
import { Code, Database, Cloud, Wrench, Server, Shield, Zap, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Spring Boot", "Java", "Node.js", "REST APIs", "Microservices"]
  },
  {
    title: "Database & Caching",
    icon: Database,
    skills: ["MongoDB", "SQL", "Redis", "Database Design"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, S3)", "Nginx", "CI/CD", "PuTTY"]
  },
  {
    title: "Tools & Version Control",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Jitsi", "WebRTC"]
  }
]

const expertise = [
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "VAPT compliance, secure API development, authentication & authorization"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Database optimization, caching strategies, scalable architecture"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Cross-functional leadership, project management, productivity enhancement"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technical proficiency across backend development, cloud infrastructure, and modern technologies
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 animate-slideUp">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Expertise */}
        <div className="max-w-6xl mx-auto animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Specialized Expertise
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card 
                key={index}
                className="group border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
