import { Card, CardContent } from "./ui/card"
import { Shield, Zap, Users, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - Center Aligned */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <p className="text-lg text-gray-600">
            Building enterprise-grade applications with security, scalability, and compliance at the core
          </p>
        </div>

        {/* Professional Summary - Two Columns */}
        <div className="max-w-6xl mx-auto mb-20 animate-slideUp">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Associate Software Engineer at <span className="font-semibold text-gray-900">Ebitaus, Chennai</span>, 
                    with proven expertise in spearheading enterprise-grade application development from the ground up. 
                    Delivered 4 major production applications including MeetUs, DocUS, KycUS, and Aadhaar eSign Solution.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Achieved <span className="font-semibold text-gray-900">99.9% availability</span> across 
                    client-facing platforms and successfully cleared <span className="font-semibold text-gray-900">VAPT compliance</span> assessments. 
                    Led collaboration with Microsoft for MeetUs publication on Teams Marketplace.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Serving as <span className="font-semibold text-gray-900">Project Owner</span> for 
                    multiple end-to-end applications, responsible for architectural decisions, backend implementation, 
                    API design, deployment, and post-deployment monitoring.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Optimized backend performance by <span className="font-semibold text-gray-900">30%</span> through 
                    clean coding practices, effective database design, and efficient Spring Boot implementation. 
                    Reduced deployment time by <span className="font-semibold text-gray-900">40%</span> using modern DevOps workflows.
                  </p>
                </div>
              </div>

              {/* Key Achievements - Bullet Points */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Spearheaded 4+ enterprise applications from conception to production deployment
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Published MeetUs on Microsoft Teams Marketplace with full compliance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Integrated AI-powered voice recognition for automated meeting transcription
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Implemented dual eSign workflows with document version control and audit trails
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Built Video KYC platform with Jitsi + WebRTC ensuring RBI compliance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      Enhanced team productivity by 15% through cross-functional collaboration
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Strengths - Uniform Cards */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Core Competencies</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <Card className="group border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    VAPT compliance, enterprise-grade security practices, 99.9% availability
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    30% backend optimization, efficient database design, scalable architecture
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Leadership</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Project ownership, Microsoft collaboration, 15% team productivity boost
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">DevOps</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    40% faster deployment, CI/CD optimization, AWS cloud infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className="max-w-4xl mx-auto mt-20 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50/50 to-white">
            <CardContent className="p-8 md:p-10 text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Associate Software Engineer
              </h3>
              <p className="text-lg text-gray-700">
                Ebitaus, Chennai • May 2024 – Present
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">Spring Boot</span>
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">MongoDB</span>
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">AWS</span>
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">REST APIs</span>
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">DevOps</span>
                <span className="px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 border border-gray-200">VAPT</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
