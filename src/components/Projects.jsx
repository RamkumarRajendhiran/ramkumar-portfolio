import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Book Swap Connect",
      date: "11/2023",
      tech: ["React JS", "MySQL", "Google Maps API", "Figma", "HTML", "CSS"],
      details: [
        "Designed and implemented a peer-to-peer web platform enabling users within local communities to list and exchange books.",
        "Created responsive frontend layouts in React.js and styled interface elements based on Figma wireframes.",
        "Integrated Google Maps API to locate and display nearby transaction partners, using MySQL for persistent listing management."
      ],
      github: "https://github.com/3200584-alt/ramkumar-portfolio"
    },
    {
      title: "Ocular Disease Recognition",
      date: "02/2024",
      tech: ["Python", "Deep Learning", "VGG-19", "Kaggle", "LBP"],
      details: [
        "Developed an automated ocular disease classification system utilizing deep learning model architectures.",
        "Applied image preprocessing filters and extracted key spatial features using Local Binary Patterns (LBP).",
        "Fine-tuned and trained a VGG-19 Convolutional Neural Network (CNN) to classify ophthalmic images, validating performance metrics."
      ],
      github: "https://github.com/3200584-alt/ramkumar-portfolio"
    },
    {
      title: "Data Analysis & Visualization Project",
      date: "07/2023",
      tech: ["Python (Pandas, NumPy)", "Power BI", "Office 365"],
      details: [
        "Collaborated in a development team to analyze educational campaign datasets, modeling user interactions and optimizing Click-Through Rate (CTR) performances.",
        "Conducted data cleaning, preprocessing, and exploratory statistical analysis to discover user engagement correlations.",
        "Built interactive Power BI dashboards that visualized campaign health and key performance metrics."
      ],
      github: "https://github.com/3200584-alt/ramkumar-portfolio"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">Academic research and web developments built using React, Python, and data processing models.</p>
        </div>

        <div className="grid-3">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
                border: '1px solid var(--glass-border)',
                height: '100%',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--color-primary)'
                }}>
                  <FolderGit2 size={20} />
                </div>
                <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} className="glow-on-hover">
                  <GithubIcon />
                </a>
              </div>

              <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontFamily: 'var(--font-display)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                {proj.date}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                {proj.title}
              </h3>

              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {proj.details.map((det, i) => (
                  <p key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', textAlign: 'justify' }}>
                    {det}
                  </p>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid rgba(186, 230, 253, 0.1)', paddingTop: '1rem' }}>
                {proj.tech.map(t => (
                  <span 
                    key={t} 
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2,rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(56, 189, 248, 0.08)',
                      color: 'var(--color-primary)',
                      border: '1px solid rgba(56, 189, 248, 0.15)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
