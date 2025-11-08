import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Github, Linkedin, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Open to discussing new opportunities, innovative projects, and enterprise backend solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slideIn">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <a
                    href="mailto:monesh141001@gmail.com"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    monesh141001@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slideIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Chennai, Tamil Nadu</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">India</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">UTC +5:30 (IST)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Available</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Open to full-time & consulting
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Networks */}
            <Card className="border border-gray-200 dark:border-gray-700 animate-slideUp">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" asChild className="h-auto p-4 justify-start group">
                    <a
                      href="https://github.com/MoneshB14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-5 h-5 text-white dark:text-gray-900" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">GitHub</div>
                        <div className="text-xs opacity-70">Open source projects</div>
                      </div>
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="h-auto p-4 justify-start group">
                    <a
                      href="https://linkedin.com/in/monesh-b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">LinkedIn</div>
                        <div className="text-xs opacity-70">Professional network</div>
                      </div>
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="h-auto p-4 justify-start group sm:col-span-2">
                    <a
                      href="http://dev.to/monesh_b_24cd798d8de84819"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white dark:text-black text-xs font-bold">DEV</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">Dev Community</div>
                        <div className="text-xs opacity-70">Technical articles & insights</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border border-gray-200 dark:border-gray-700 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Backend Development</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Spring Boot Applications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>REST API Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Microservices Architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Database Design & Optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Cloud & DevOps</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>AWS Cloud Solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>CI/CD Pipeline Setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>Security & VAPT Compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ready to start your project?
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild className="group">
                        <a href="mailto:monesh141001@gmail.com" className="flex items-center gap-2">
                          <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Send Message
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="group">
                        <a href="https://linkedin.com/in/monesh-b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
