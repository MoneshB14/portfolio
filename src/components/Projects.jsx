import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useProjectsAnimations } from "../hooks/useProjectsAnimations"

const projects = [
  {
    title: "MeetUs – Meeting Management Platform",
    category: "Enterprise",
    description: "Complete backend solution for meeting management tailored for financial institutions. Features automated Minutes of Meeting generation, AI-powered speaker recognition, and audit trail compliance.",
    highlights: [
      "AI-powered voice recognition with timestamp tagging",
      "Microsoft Teams Marketplace publication",
      "Secure workflows with Spring Boot and MongoDB"
    ],
    tech: ["Spring Boot", "MongoDB", "AWS", "AI/ML", "REST APIs"],
    status: "Production"
  },
  {
    title: "DocUS – Document Management Platform",
    category: "Banking",
    description: "Enterprise document management platform for banks enabling multi-party document collaboration, version control, and dual eSign workflows with comprehensive audit trails.",
    highlights: [
      "Multi-bank document version merging system",
      "Dual eSign integration (eMudra DSC, eSign)",
      "E-Stamping workflow with admin portal"
    ],
    tech: ["Spring Boot", "MongoDB", "eSign APIs", "REST APIs"],
    status: "Production"
  },
  {
    title: "KycUS – KYC & Video KYC Platform",
    category: "FinTech",
    description: "Secure KYC and Video KYC platform for corporate entities and individuals. Built with Jitsi and WebRTC, ensuring full RBI compliance for financial institutions.",
    highlights: [
      "RBI-compliant Video KYC module",
      "Jitsi + WebRTC TURN/STUN integration",
      "Corporate and individual onboarding flows"
    ],
    tech: ["Spring Boot", "MongoDB", "Jitsi", "WebRTC"],
    status: "Production"
  },
  {
    title: "Aadhaar eSign API Solution",
    category: "API Platform",
    description: "API-first solution for secure document e-signing with Aadhaar authentication. Features API Gateway for centralized auth, routing, and rate limiting with seamless integration capabilities.",
    highlights: [
      "API Gateway with centralized authentication",
      "Proteon eSign API integration",
      "Reusable API layer for enterprise products"
    ],
    tech: ["Spring Boot", "API Gateway", "REST APIs"],
    status: "Production"
  },
  {
    title: "Motorbikes Service Center Management",
    category: "Full Stack",
    description: "Full-stack application for service center management with customer history tracking, service records, stock management, and role-based access control for multiple user types.",
    highlights: [
      "RBAC system for admins, owners, and staff",
      "Customer visit tracking with discount logic",
      "Microservice architecture for email notifications"
    ],
    tech: ["React", "Spring Boot", "Node.js", "MongoDB"],
    status: "Completed"
  }
]

export default function Projects() {
  const { sectionRef, projectsRef } = useProjectsAnimations()
  
  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise applications demonstrating backend expertise, system architecture, and scalable solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card group h-full border border-gray-200 gsap-card"
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                    <Badge
                      className={project.status === 'Production' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack - Uniform Style */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 border border-gray-200"
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

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="border border-gray-200 gsap-card">
            <CardContent className="p-8 md:p-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Let's Build Something Great
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Open to discussing new opportunities and innovative projects that push the boundaries of backend development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="gsap-button">
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="gsap-button">
                  <a href="mailto:monesh141001@gmail.com">Send Email</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
