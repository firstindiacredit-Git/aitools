import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

function RedirectToHome() {
  useEffect(() => {
    window.location.replace('/home.html')
  }, [])

  return (
    <main className="main-content fade-in">
      <p>Redirecting to home...</p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
