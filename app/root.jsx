import { Outlet } from 'react-router'
import HtmlShell from './components/HtmlShell.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <HtmlShell>
          <main >
            <Outlet />
          </main>
        </HtmlShell>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <HtmlShell>
          <div className='container'>
            <h2>Error!</h2>
            <h4>{error.message}</h4>
          </div>
        </HtmlShell>
      </ThemeProvider>
    </LanguageProvider>
  )
}
