import { createContext, useContext, useEffect, useState } from 'react'
import { useConfig } from '@/lib/config'

const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const { appearance } = useConfig()
  const [dark, setDark] = useState(true)

  if (appearance === "light") {
    setDark(false)
  }

  useEffect(() => {
    if (typeof dark === 'boolean') {
      document.documentElement.classList.toggle('dark', dark)
      document.documentElement.classList.remove('color-scheme-unset')
    }
  }, [dark])

  const toggleDark = () => setDark(!dark)

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme () {
  return useContext(ThemeContext)
}
