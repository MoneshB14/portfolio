import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/**
 * Initialize ScrollSmoother for the entire site
 */
export function useScrollSmoother() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    
    // Check if ScrollSmoother is supported (desktop typically)
    const isMobile = window.innerWidth < 768
    
    if (!isMobile && ScrollSmoother) {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
        ignoreMobileResize: true,
      })
      
      return () => {
        smoother?.kill()
        mm.revert()
      }
    }
    
    return () => {
      mm.revert()
    }
  }, [])
}

/**
 * Hero section animations - Premium landing
 */
export function useHeroAnimations() {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const subheadlineRef = useRef(null)
  const profileRef = useRef(null)
  const highlightsRef = useRef(null)
  const buttonsRef = useRef(null)
  const metricsRef = useRef(null)
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        // Name and title - fade up + slight scale
        gsap.fromTo(nameRef.current, 
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2
          }
        )
        
        // Title/headline
        gsap.fromTo(titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 0.4
          }
        )
        
        // Subheadline with stagger
        gsap.fromTo(subheadlineRef.current?.children || [],
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.6
          }
        )
        
        // Profile picture from left with motion blur effect
        gsap.fromTo(profileRef.current,
          {
            opacity: 0,
            x: -100,
            scale: 0.9,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3
          }
        )
        
        // Highlights with stagger
        if (highlightsRef.current) {
          gsap.fromTo(highlightsRef.current.children || [],
            {
              opacity: 0,
              x: -20
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 0.8
            }
          )
        }
        
        // Buttons
        if (buttonsRef.current) {
          gsap.fromTo(buttonsRef.current.children || [],
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              delay: 1
            }
          )
        }
        
        // Metrics cards with stagger
        if (metricsRef.current) {
          gsap.fromTo(metricsRef.current.children || [],
            {
              opacity: 0,
              y: 50,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
              delay: 1.2
            }
          )
        }
        
        // Subtle parallax between text and photo
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (profileRef.current) {
              gsap.to(profileRef.current, {
                y: self.progress * 30,
                ease: 'none'
              })
            }
            if (nameRef.current) {
              gsap.to(nameRef.current, {
                y: self.progress * -20,
                ease: 'none'
              })
            }
          }
        })
      })
      
      // Mobile - simpler animations
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo([nameRef.current, titleRef.current, profileRef.current],
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
          }
        )
        
        if (subheadlineRef.current) {
          gsap.fromTo(subheadlineRef.current,
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4
            }
          )
        }
      })
      
    }, heroRef)
    
    return () => ctx.revert()
  }, [])
  
  return {
    heroRef,
    nameRef,
    titleRef,
    subheadlineRef,
    profileRef,
    highlightsRef,
    buttonsRef,
    metricsRef
  }
}

/**
 * Scroll-based section reveal animation
 */
export function useSectionReveal(sectionRef, options = {}) {
  const {
    triggerOnce = true,
    start = 'top 80%',
    stagger = 0.1,
    children = null
  } = options
  
  useLayoutEffect(() => {
    if (!sectionRef.current) return
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        const targets = children 
          ? sectionRef.current.querySelectorAll(children)
          : sectionRef.current.children
        
        gsap.fromTo(targets,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
            rotationX: 5
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1,
            stagger: stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: start,
              toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
              once: triggerOnce
            }
          }
        )
      })
      
      // Mobile - simpler reveal
      mm.add('(max-width: 767px)', () => {
        const targets = children 
          ? sectionRef.current.querySelectorAll(children)
          : sectionRef.current.children
        
        gsap.fromTo(targets,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: stagger * 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
              once: triggerOnce
            }
          }
        )
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [sectionRef, children, start, stagger, triggerOnce])
}

/**
 * Background animation layer - gradient blobs and particles
 */
export function useBackgroundAnimation() {
  const bgRef = useRef(null)
  
  useLayoutEffect(() => {
    if (!bgRef.current) return
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        // Create animated gradient blobs
        const blobs = bgRef.current.querySelectorAll('.animated-blob')
        
        blobs.forEach((blob, index) => {
          const tl = gsap.timeline({ repeat: -1, yoyo: true })
          
          tl.to(blob, {
            x: `+=${(index % 2 === 0 ? 1 : -1) * 100}`,
            y: `+=${(index % 2 === 0 ? 1 : -1) * 80}`,
            scale: 1.1,
            duration: 8 + index * 2,
            ease: 'sine.inOut'
          })
        })
        
        // Floating particles effect
        const particles = bgRef.current.querySelectorAll('.particle')
        particles.forEach((particle, index) => {
          gsap.to(particle, {
            y: 'random(-100, 100)',
            x: 'random(-50, 50)',
            rotation: 'random(0, 360)',
            duration: 'random(3, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
          })
        })
      })
    }, bgRef)
    
    return () => ctx.revert()
  }, [])
  
  return bgRef
}

/**
 * Micro-interactions for cards, buttons, and icons
 */
export function useMicroInteractions() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Card hover effects
      const cards = document.querySelectorAll('.gsap-card')
      cards.forEach(card => {
        const quickTo = gsap.quickTo(card, 'y', {
          duration: 0.3,
          ease: 'power2.out'
        })
        
        const quickToShadow = gsap.quickTo(card, 'boxShadow', {
          duration: 0.3,
          ease: 'power2.out'
        })
        
        card.addEventListener('mouseenter', () => {
          quickTo(-8)
          quickToShadow('0 20px 40px rgba(0, 0, 0, 0.15)')
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        
        card.addEventListener('mouseleave', () => {
          quickTo(0)
          quickToShadow('0 4px 6px rgba(0, 0, 0, 0.1)')
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
      
      // Button hover effects
      const buttons = document.querySelectorAll('.gsap-button')
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.out'
          })
        })
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          })
        })
        
        button.addEventListener('mousedown', () => {
          gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
          })
        })
      })
      
      // Icon animations
      const icons = document.querySelectorAll('.gsap-icon')
      icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            rotation: 360,
            scale: 1.2,
            duration: 0.6,
            ease: 'back.out(1.7)'
          })
        })
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          })
        })
      })
    })
    
    return () => ctx.revert()
  }, [])
}

