import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schools from './components/Schools';
import News from './components/News';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import AcademicPage from './components/AcademicPage';
import NewsDetailPage from './components/NewsDetailPage';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Schools />
      <News />
      <Admission />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载时间
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>广东药科大学</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
