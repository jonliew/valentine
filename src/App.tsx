import './App.css';
import { SiteHeader } from './components/layouts/SiteHeader';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { Question } from './components/Question';
import { Reveal } from './components/Reveal';
import { targetTime } from './constants';

function App() {
  const showQuestion = new Date() < new Date(targetTime);
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SiteHeader />
      {showQuestion ? <Question /> : <Reveal />}
    </ThemeProvider>
  )
}

export default App
