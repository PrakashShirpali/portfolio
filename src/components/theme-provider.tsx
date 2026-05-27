import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"
type AccentTheme =
  | "yellow"
  | "blue"
  | "green"
  | "red"
  | "purple"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void

  accentTheme: AccentTheme
  setAccentTheme: (theme: AccentTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,

  accentTheme: "green",
  setAccentTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  const [accentTheme, setAccentThemeState] = useState<AccentTheme>(
    () =>
      (localStorage.getItem("accent-theme") as AccentTheme) || "green"
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(
      "theme-yellow",
      "theme-blue",
      "theme-green",
      "theme-red",
      "theme-purple"
    )

    root.classList.add(`theme-${accentTheme}`)
  }, [accentTheme])

  const value: ThemeProviderState = {
    theme,

    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },

    accentTheme,

    setAccentTheme: (accentTheme: AccentTheme) => {
      localStorage.setItem("accent-theme", accentTheme)

      setAccentThemeState(accentTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}