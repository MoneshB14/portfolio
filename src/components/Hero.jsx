import { Button } from "./ui/button"
import { Mail, Download, MapPin, CheckCircle } from "lucide-react"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/50"></div>
      
      {/* Minimal blurred shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 animate-fadeIn">
            {/* Profile Photo - Smaller */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
                <img
                  src={profile}
                  alt="Monesh B"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                  Monesh B
                </h1>
                {/* Professional Headline */}
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
                  Backend Engineer | Spring Boot | Cloud | Scalable Systems
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Chennai, India • UTC +5:30</span>
              </div>

              {/* Brief Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Associate Software Engineer at Ebitaus specializing in enterprise-grade backend development. 
                Led development of 4+ production applications with 99.9% uptime and VAPT compliance.
              </p>

              {/* Key Highlights - Inline */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>5+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                <Button size="lg" className="group">
                  <a href="mailto:monesh141001@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <a
                    href="/B_Monesh_Resume.pdf.pdf"
                    download="Monesh_B_Resume.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Cards - Smaller and Cleaner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-slideUp">
            <div className="group p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-gray-900">2+</div>
                <div className="text-sm text-gray-600">Years Exp.</div>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-gray-900">30%</div>
                <div className="text-sm text-gray-600">Perf. Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
