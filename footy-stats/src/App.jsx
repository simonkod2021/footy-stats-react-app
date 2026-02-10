import { CustomHeader } from './components/header'
import { CustomFooter } from './components/footer'
import { Standings } from './components/standings'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { LatestNews } from './pages/latestNews'
function App() {
  return (
    <>
      <CustomHeader />
      <main>
        <Routes>
          <Route path="/" element={<Standings />} />
          <Route path="/news" element={<LatestNews />} />
        </Routes>
      </main>
      <footer>
        <CustomFooter />
      </footer>
   </>
  )
}

export default App
