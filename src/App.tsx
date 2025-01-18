
import './App.css'
import { ModeToggle } from './components/ModeToggle'
import { ThemeProvider } from './components/providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
