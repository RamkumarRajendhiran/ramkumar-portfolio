import { scrollToElement } from '../utils/scroll';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Terminal, BookOpen, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';

export default function Navbar({ onSelectTopic, onSelectCollege, topics, colleges }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'topics' | 'colleges' | null
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    setActiveDropdown(null);
    scrollToElement(id);
  };

  const handleTopicClick = (topic) => {
    setActiveDropdown(null);
    setIsOpen(false);
    onSelectTopic(topic);
  };

  const handleCollegeClick = (college) => {
    setActiveDropdown(null);
    setIsOpen(false);
    onSelectCollege(college);
  };

  return (
    <nav className="glass-nav" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 100,
      background: 'rgba(11, 19, 41, 0.75)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(186, 230, 253, 0.15)',
      borderRadius: '24px',
      padding: '0.75rem 1.5rem',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand */}
        <div style={{ 
          fontFamily: 'var(--font-display)', 
          fontWeight: 800, 
          fontSize: '1.3rem', 
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }} onClick={() => handleNavClick('hero')}>
          <span style={{ color: 'var(--color-primary)' }}>&lt;</span>
          Ramkumar R.
          <span style={{ color: 'var(--color-primary)' }}>/&gt;</span>
        </div>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} style={navLinkStyle} className={activeSection === 'about' ? 'nav-link-active' : ''}>About</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} style={navLinkStyle} className={activeSection === 'experience' ? 'nav-link-active' : ''}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} style={navLinkStyle} className={activeSection === 'projects' ? 'nav-link-active' : ''}>Projects</a>
          
          {/* Topics Dropdown */}
          <div style={{ position: 'relative' }} 
               onMouseEnter={() => setActiveDropdown('topics')}
               onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              Topics Handled <ChevronDown size={14} />
            </button>
            {activeDropdown === 'topics' && (
              <div className="dropdown-menu" style={dropdownStyle}>
                {topics.map(t => (
                  <button key={t} onClick={() => handleTopicClick(t)} style={dropdownItemStyle}>
                    <Terminal size={12} style={{ color: 'var(--color-primary)' }} />
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Colleges Dropdown */}
          <div style={{ position: 'relative' }}
               onMouseEnter={() => setActiveDropdown('colleges')}
               onMouseLeave={() => setActiveDropdown(null)}>
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              Colleges Covered <ChevronDown size={14} />
            </button>
            {activeDropdown === 'colleges' && (
              <div className="dropdown-menu" style={{ ...dropdownStyle, width: '280px' }}>
                {colleges.map(c => (
                  <button key={c} onClick={() => handleCollegeClick(c)} style={dropdownItemStyle}>
                    <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} />
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }} style={navLinkStyle} className={activeSection === 'skills' ? 'nav-link-active' : ''}>Skills</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} style={navLinkStyle} className={activeSection === 'education' ? 'nav-link-active' : ''}>Education</a>
          <a href="#certifications" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }} style={navLinkStyle} className={activeSection === 'certifications' ? 'nav-link-active' : ''}>Certifications</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} style={navLinkStyle} className={activeSection === 'contact' ? 'nav-link-active' : ''}>Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" style={{ display: 'none', cursor: 'pointer' }}>
          {isOpen ? <X onClick={() => setIsOpen(false)} /> : <Menu onClick={() => setIsOpen(true)} />}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', paddingBottom: '0.5rem' }}>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} style={mobileNavLinkStyle}>About</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} style={mobileNavLinkStyle}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} style={mobileNavLinkStyle}>Projects</a>
          
          <div style={{ borderTop: '1px solid rgba(186,230,253,0.1)', paddingTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', paddingLeft: '0.5rem' }}>Topics Handled</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
              {topics.map(t => (
                <button key={t} onClick={() => handleTopicClick(t)} style={mobileSubButtonStyle}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(186,230,253,0.1)', paddingTop: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', paddingLeft: '0.5rem' }}>Colleges Covered</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem', overflowY: 'auto' }}>
              {colleges.map(c => (
                <button key={c} onClick={() => handleCollegeClick(c)} style={{ ...mobileSubButtonStyle, textAlign: 'left' }}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }} style={mobileNavLinkStyle}>Skills</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} style={mobileNavLinkStyle}>Education</a>
          <a href="#certifications" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }} style={mobileNavLinkStyle}>Certifications</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} style={mobileNavLinkStyle}>Contact</a>
        </div>
      )}
      
      <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-icon { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.95rem',
  fontWeight: '500',
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  cursor: 'pointer'
};

const mobileNavLinkStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.1rem',
  fontWeight: '500',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  padding: '0.25rem 0.5rem'
};

const mobileSubButtonStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(186,230,253,0.1)',
  borderRadius: '8px',
  color: 'var(--text-secondary)',
  padding: '0.4rem 0.6rem',
  fontSize: '0.8rem',
  cursor: 'pointer',
  textAlign: 'center'
};

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginTop: '0.75rem',
  width: '220px',
  background: 'rgba(15, 23, 42, 0.95)',
  border: '1px solid rgba(186, 230, 253, 0.2)',
  borderRadius: '16px',
  padding: '0.5rem',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  animation: 'fadeIn 0.2s ease-out'
};

const dropdownItemStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-secondary)',
  padding: '0.5rem 0.75rem',
  borderRadius: '8px',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-body)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'all 0.2s ease'
};
