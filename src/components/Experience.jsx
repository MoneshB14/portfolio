import { Card, CardContent } from "./ui/card"
import { Calendar, Building, TrendingUp } from "lucide-react"

const experiences = [
  {
    company: "Ebitaus",
    location: "Chennai, India",
    position: "Associate Software Engineer",
    duration: "May 2024 – Present",
    achievements: [
      "Spearheaded enterprise-grade application development (MeetUs, DocUS, KycUS, Aadhaar eSign) from conception to production",
      "Achieved 99.9% availability and VAPT compliance across client-facing platforms",
      "Optimized backend performance by 30% through effective database design and Spring Boot implementation",
      "Led Microsoft collaboration for MeetUs publication on Teams Marketplace",
      "Architected AI-powered voice recognition for automated speaker tagging in meeting transcription",
      "Implemented dual eSign workflows (eSign + eMudra DSC) with document version control and audit trails",
      "Built Video KYC platform with Jitsi + WebRTC ensuring RBI compliance",
      "Reduced deployment time by 40% using Nginx and AWS (EC2, S3) with enhanced CI/CD reliability",
      "Project Owner for multiple end-to-end applications handling architecture, implementation, and deployment",
      "Enhanced team productivity by 15% through cross-functional collaboration"
    ],
    technologies: ["Spring Boot", "MongoDB", "AWS", "REST APIs", "AI/ML", "Jitsi", "WebRTC", "eSign APIs", "Nginx", "DevOps"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional journey and key achievements in software development
          </p>
        </div>

        {/* Experience Details */}
        <div className="max-w-4xl mx-auto mb-16 animate-slideUp">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-900 dark:text-white">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="max-w-5xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-gray-900">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Performance Metrics</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">30%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Performance</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Deploy</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">15%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team Boost</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
