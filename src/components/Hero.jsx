import { scrollToElement } from '../utils/scroll';
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// Custom Inline SVG Components for Brand Icons to avoid missing export errors in older Lucide versions
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero({ onSelectCollege }) {
  const resume = {
    name: "Ramkumar Rajendiran",
    title: "IT Trainer / Programming Instructor / Data Analyst",
    email: "rk8070039@gmail.com",
    phone: "+91-7639506694",
    location: "Chennai, Tamil Nadu",
    linkedin: "https://linkedin.com/in/ramkumar-rajendhiran-8037431aa",
    github: "https://github.com/3200584-alt/ramkumar-portfolio"
  };

  return (
    <section id="about" className="section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="glass-panel" style={{
          padding: '3rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Subtle Liquid Glow Highlight inside Hero */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <span style={{ 
                color: 'var(--color-primary)', 
                fontFamily: 'var(--font-display)', 
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Welcome to my portfolio
              </span>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ffffff 30%, var(--color-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {resume.name}
              </h1>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                fontWeight: 500,
                marginBottom: '1.5rem'
              }}>
                {resume.title}
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                maxWidth: '650px',
                textAlign: 'justify'
              }}>
                Dedicated **IT Trainer and Programming Instructor** based in Chennai, delivering hands-on computer science training across several prominent engineering colleges. Specializing in Python, Java, Data Structures & Algorithms, MERN stack development, and exploratory Data Analysis with Power BI.
              </p>

              {/* Contact Info Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={contactBadgeStyle}><Phone size={14} /> {resume.phone}</div>
                <a href={`mailto:${resume.email}`} style={contactLinkStyle}><Mail size={14} /> {resume.email}</a>
                <div style={contactBadgeStyle}><MapPin size={14} /> {resume.location}</div>
                <a href={resume.linkedin} target="_blank" rel="noreferrer" style={contactLinkStyle}><LinkedinIcon style={{ color: 'var(--color-primary)', marginRight: '4px' }} /> LinkedIn</a>
                <a href={resume.github} target="_blank" rel="noreferrer" style={contactLinkStyle}><GithubIcon style={{ color: 'var(--color-primary)', marginRight: '4px' }} /> GitHub</a>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => scrollToElement('projects')} 
                  className="btn btn-primary"
                  style={{ border: 'none', cursor: 'pointer', textDecoration: 'none' }}
                >
                  Explore Projects <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => scrollToElement('contact')} 
                  className="btn btn-secondary"
                  style={{ border: 'none', cursor: 'pointer', textDecoration: 'none' }}
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Profile Avatar / Coding Glass Icon */}
            <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-avatar-container">
              <div className="glow-on-hover" style={{
                width: '200px',
                height: '200px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(45deg, rgba(56, 189, 248, 0.2), rgba(14, 165, 233, 0.4))',
                border: '2px solid var(--color-primary)',
                boxShadow: 'var(--glow-shadow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'morph 8s ease-in-out infinite'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '3rem',
                  color: '#ffffff',
                  textShadow: '0 0 10px rgba(56, 189, 248, 0.6)'
                }}>
                  RR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 60% 40% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar-container { margin-top: 1rem; }
        }
      `}</style>
    </section>
  );
}

const contactBadgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.4rem 0.8rem',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  fontSize: '0.85rem',
  color: 'var(--text-secondary)'
};

const contactLinkStyle = {
  ...contactBadgeStyle,
  textDecoration: 'none',
  color: 'var(--color-primary)',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};
