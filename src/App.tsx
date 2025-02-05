
import './App.css'
import { SiteHeader } from './components/layouts/SiteHeader'
import { ThemeProvider } from './components/providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SiteHeader />
    </ThemeProvider>
  )
}

export default App
