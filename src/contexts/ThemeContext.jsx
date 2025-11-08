import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => null,
  toggleTheme: () => null,
})

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey)
      if (storedTheme) return storedTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    const body = window.document.body

    root.classList.remove('light', 'dark')
    
    // Add smooth transition for theme changes
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease'

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      
      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e) => {
        if (theme === 'system') {
          root.classList.remove('light', 'dark')
          root.classList.add(e.matches ? 'dark' : 'light')
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    root.classList.add(theme)
    
    // Cleanup transition after theme change
    const timer = setTimeout(() => {
      body.style.transition = ''
    }, 300)
    
    return () => clearTimeout(timer)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, newTheme)
      }
      setTheme(newTheme)
    },
    toggleTheme: () => {
      const themes = ['light', 'dark', 'system']
      const currentIndex = themes.indexOf(theme)
      const nextTheme = themes[(currentIndex + 1) % themes.length]
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, nextTheme)
      }
      setTheme(nextTheme)
    },
    getCurrentTheme: () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return theme
    }
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
