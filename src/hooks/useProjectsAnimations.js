import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Royal Enfield style Projects section - Story progression with pinned cards
 */
export function useProjectsAnimations() {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)
  const timelineRef = useRef(null)
  
  useLayoutEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        const projectCards = projectsRef.current.querySelectorAll('.project-card')
        
        if (projectCards.length === 0) return
        
        // Animate each project card with scroll reveal
        projectCards.forEach((card, index) => {
          // Set initial state
          gsap.set(card, {
            opacity: 0,
            y: 100,
            scale: 0.95,
            filter: 'blur(15px)'
          })
          
          // Create scroll-triggered animation
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: 'power3.out'
              })
            },
            onLeave: () => {
              // Optional: fade out when leaving
            },
            onEnterBack: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: 'power3.out'
              })
            }
          })
          
          // Add subtle parallax effect on scroll
          ScrollTrigger.create({
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress
              gsap.to(card, {
                y: progress * -30,
                scale: 1 + progress * 0.02,
                ease: 'none'
              })
            }
          })
        })
        
        // Animate section header
        const header = sectionRef.current.querySelector('.section-header')
        if (header) {
          gsap.fromTo(header,
            {
              opacity: 0,
              y: -30
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true
              }
            }
          )
        }
      })
      
      // Mobile - simpler reveal without pinning
      mm.add('(max-width: 767px)', () => {
        const projectCards = projectsRef.current.querySelectorAll('.project-card')
        
        projectCards.forEach((card, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true
              }
            }
          )
        })
      })
    }, sectionRef)
    
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      ctx.revert()
    }
  }, [])
  
  return {
    sectionRef,
    projectsRef
  }
}

