import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Objectives from './pages/Objectives'
import Mentorship from './pages/Mentorship'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CustomCursor from './components/CustomCursor'

function ScrollToTop() {
  const { pathname, key } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, key])

  return null
}

/* Temporary page for routes that aren't built yet. Replace each with a real page later. */
function Placeholder({ title }) {
  return (
    <main className="placeholder-page">
      <p className="label">Coming soon</p>
      <h1>{title}</h1>
      <p>This page is a placeholder. Build it in src/pages and swap the route in App.jsx.</p>
      <Link to="/" className="btn btn--dark">Back to Home</Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/work" element={<Placeholder title="Work" />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Contact />} /> 
        <Route path="*" element={<Placeholder title="Page not found" />} />
      </Routes>
    </BrowserRouter>
  )
}