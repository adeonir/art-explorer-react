'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'

import { useTheme } from '~/shared/hooks/useTheme'

export function ThemeButton() {
  const { theme, setTheme, isReady } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!isReady) return null

  return (
    <button
      className="cursor-pointer rounded-full bg-transparent p-2 transition-colors duration-300 hover:bg-white [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-[2]"
      disabled={!isReady}
      onClick={handleClick}
      type="button">
      <motion.div
        animate={{ rotate: 0, opacity: 1 }}
        className="flex items-center justify-center text-primary-foreground"
        exit={{ rotate: 90, opacity: 0 }}
        initial={{ rotate: -90, opacity: 0 }}
        key={theme}
        transition={{ duration: 0.3 }}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </motion.div>
    </button>
  )
}
