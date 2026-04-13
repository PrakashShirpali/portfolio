import { ThemeProvider } from "@/components/theme-provider"
import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "./components/ui/sonner"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
      <Toaster position="top-right" />
    </ThemeProvider>
  )
}

export default App
