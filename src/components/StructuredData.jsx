import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Monesh B",
      "jobTitle": "Associate Software Engineer",
      "description": "Backend Developer specializing in Spring Boot, MongoDB, and AWS. Expert in building secure, scalable enterprise applications.",
      "url": "https://moneshb.dev",
      "image": "https://moneshb.dev/profile.jpg",
      "worksFor": {
        "@type": "Organization",
        "name": "Ebitaus",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "India"
        }
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "SRM Institute of Science and Technology"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "Panimalar Engineering College"
        }
      ],
      "knowsAbout": [
        "Spring Boot",
        "MongoDB",
        "AWS",
        "Java",
        "REST APIs",
        "Microservices",
        "Backend Development",
        "Database Design",
        "Cloud Computing",
        "DevOps"
      ],
      "sameAs": [
        "https://github.com/MoneshB14",
        "https://linkedin.com/in/monesh-b",
        "http://dev.to/monesh_b_24cd798d8de84819"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "monesh141001@gmail.com",
        "contactType": "professional"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
