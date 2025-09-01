import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (page) => {
    if (page === 'about') {
      navigate('/about');
    } else if (page === 'academic') {
      navigate('/academic');
    } else if (page === 'home') {
      navigate('/');
    } else {
      // 如果是首页的其他部分，滚动到对应区域
      if (location.pathname === '/') {
        scrollToSection(page);
      } else {
        // 如果不在首页，先导航到首页再滚动
        navigate('/', { state: { scrollTo: page } });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <h1>广东药科大学</h1>
            <p>Guangdong Pharmaceutical University</p>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => navigateToPage('home')}>首页</button></li>
              <li><button onClick={() => navigateToPage('about')}>关于我们</button></li>
              <li><button onClick={() => navigateToPage('academic')}>学术科研</button></li>
              <li><button onClick={() => navigateToPage('schools')}>学院设置</button></li>
              <li><button onClick={() => navigateToPage('news')}>新闻动态</button></li>
              <li><button onClick={() => navigateToPage('admission')}>招生信息</button></li>
              <li><button onClick={() => navigateToPage('contact')}>联系我们</button></li>
            </ul>
          </nav>

          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
