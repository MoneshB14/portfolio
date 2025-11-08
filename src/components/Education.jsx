import { Card, CardContent } from "./ui/card"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import { Button } from "./ui/button"

const education = [
  {
    degree: "MBA – Business Administration",
    institution: "SRM Institute of Science and Technology",
    duration: "July 2024 - Pursuing",
    gpa: "CGPA: 9.30 (Current)",
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Panimalar Engineering College, Chennai",
    duration: "June 2020 – April 2024",
    gpa: "GPA: 8.55/10.0",
    icon: BookOpen
  }
]

const certificates = [
  "Programming in Java – Sudharsanam IT Academy (Formerly NIIT)",
  "Spring Boot – Udemy",
  "SQL – Udemy"
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic background and professional learning journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Academic Background */}
          <div className="animate-slideUp">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Academic Background</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Certifications</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Publications */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Publications & Writing</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Contributing technical articles and insights on Spring Boot and backend development best practices to the Dev Community, 
                  sharing knowledge with the developer ecosystem.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    Spring Boot
                  </span>
                  <span className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    Backend Development
                  </span>
                  <span className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    Best Practices
                  </span>
                </div>
                <Button variant="outline" asChild>
                  <a 
                    href="http://dev.to/monesh_b_24cd798d8de84819" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Articles on Dev Community
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
