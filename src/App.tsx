import './App.css';
import { SiteHeader } from './components/layouts/SiteHeader';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { Question } from './components/Question';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SiteHeader />
      <Question />
    </ThemeProvider>
  )
}

export default App
