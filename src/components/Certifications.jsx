import React from 'react';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      name: "Data Visualization with Python",
      issuer: "IBM / Cognitive Class",
      file: "IBM DV0101EN Certificate _ Cognitive Class.pdf"
    },
    {
      name: "Data Analysis",
      issuer: "OpenLearn",
      file: "Openlearn.pdf"
    },
    {
      name: "SQL (Advanced)",
      issuer: "HackerRank",
      file: "sql_advanced certificate.pdf"
    },
    {
      name: "Big Data Hadoop Course",
      issuer: "DataFlair",
      file: "Ramkumar-Rajendhiran-Free-Big-Data-Hadoop-Course-8211-Learn-Hadoop-with-Real-time-Projects-Big-Data-Hadoop-Certificate-DataFlair.pdf"
    },
    {
      name: "Data Structures & Algorithms in C",
      issuer: "DataFlair",
      file: "Ramkumar-Rajendhiran-Free-Data-Structures-and-Algorithms-Course-in-C-Hindi---Certification-Included-dsa-certificate-DataFlair.pdf"
    },
    {
      name: "NumPy Certification Course",
      issuer: "DataFlair",
      file: "Ramkumar-Rajendhiran-Free-NumPy-Certification-Course-Hindi-NumPy-Certificate-DataFlair.pdf"
    },
    {
      name: "Looker for Data Visualization",
      issuer: "Google / Coursera",
      file: "Looker for Data Visualization.pdf"
    },
    {
      name: "Google Analytics (Course Certificate)",
      issuer: "Google / Coursera",
      file: "Course_Certificate Ramkumar-Analytics.pdf"
    },
    {
      name: "Programming Foundations: Web Security",
      issuer: "LinkedIn Learning",
      file: "CertificateOfCompletion_Programming Foundations Web Security.pdf"
    },
    {
      name: "Data Analyst Internship",
      issuer: "Excelerate",
      file: "Intership Completion Certificate .pdf"
    },
    {
      name: "Python Deep Learning",
      issuer: "Mindluster / Professional",
      file: "Python Deep Learning.pdf"
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      file: "python_basic certificate (3).pdf"
    },
    {
      name: "Mindluster Certification",
      issuer: "Mindluster / Professional",
      file: "Mindluster.pdf"
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">
            Click any badge to view the verified PDF document representing my qualifications and competencies.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {certs.map((c, idx) => {
            const pdfLink = import.meta.env.BASE_URL + "images/certificates/" + encodeURIComponent(c.file);
            return (
              <a 
                key={idx} 
                href={pdfLink}
                target="_blank"
                rel="noreferrer"
                className="glass-panel glow-on-hover" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(28, 37, 65, 0.3)',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <Award size={18} />
                </div>

                <div style={{ flex: 1, paddingRight: '1rem' }}>
                  <h4 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    color: '#ffffff',
                    lineHeight: '1.3',
                    marginBottom: '0.2rem'
                  }}>
                    {c.name}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <ShieldCheck size={12} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.issuer}</span>
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  opacity: 0.5,
                  transition: 'all 0.3s ease'
                }} className="external-icon">
                  <ExternalLink size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        a.glass-panel:hover .external-icon {
          color: var(--color-primary) !important;
          opacity: 1 !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
      `}</style>
    </section>
  );
}
