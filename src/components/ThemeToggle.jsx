import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ]

  const currentThemeIndex = themes.findIndex(t => t.value === theme)
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length]

  const handleToggle = () => {
    setTheme(nextTheme.value)
  }

  const CurrentIcon = themes[currentThemeIndex]?.icon || Monitor

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className={`relative p-2 hover:bg-accent transition-all duration-200 ${className}`}
      aria-label={`Switch to ${nextTheme.label.toLowerCase()} theme`}
      title={`Current: ${theme} • Click for ${nextTheme.label.toLowerCase()}`}
    >
      <CurrentIcon className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

