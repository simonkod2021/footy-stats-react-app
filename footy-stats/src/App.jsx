import { CustomHeader } from './components/header'
import { CustomFooter } from './components/footer'
import { Football } from './pages/FootballEngland'
import { LatestNews } from './pages/latestNews'
import { Dashboard } from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { LeaguePicker } from './components/leaguePicker'
import { FootballGermany } from './pages/FootballGermany'
import { NotFound } from './pages/NotFound'
import './index.css'
function App() {
  return (
    <>
    <CustomHeader />
      <main>
          <Routes>
          <Route path="/leagues" element={<LeaguePicker />} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="/leagues/england/stats" element={<Football />} />
          <Route path="/leagues/germany/stats" element={<FootballGermany />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <CustomFooter />
      </footer>
   </>
  )
}

export default App
