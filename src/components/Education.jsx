import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Star, Award, ShieldCheck } from 'lucide-react';
import { scrollToElement, isCollegeMatch } from '../utils/scroll';

export default function Education({ selectedCollege, selectedVendor, onHighlightSkill }) {
  const education = [
    {
      school: "Dhanalakshmi Srinivasan Engineering College (Autonomous)",
      location: "Perambalur, TN",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "08/2020 – 04/2024",
      grade: "CGPA: 8.0/10",
      description: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, Software Engineering.",
      image: import.meta.env.BASE_URL + "images/ds_college.png"
    },
    {
      school: "Government Higher Secondary School",
      location: "Salem, TN",
      degree: "HSC (Bio-Maths) & SSLC",
      period: "06/2012 – 03/2020",
      grade: "HSC – 61% | SSLC – 84%",
      description: "Foundational secondary and higher secondary schooling in Salem with biology and mathematics specialization.",
      image: import.meta.env.BASE_URL + "images/govt_school.png"
    },
    {
      school: "Covered Training Campus Hub",
      location: "Multiple Institutions, TN",
      degree: "Corporate Technical Trainer & Placement Advisor",
      period: "08/2024 – Present",
      grade: "10+ Engineering Colleges",
      description: "Delivering computational complexity workshops, DSA training, Python, Power BI modeling, and mock interviews to thousands of engineering undergraduates.",
      image: import.meta.env.BASE_URL + "images/training_hub.png"
    }
  ];

  const clientColleges = [
    {
      name: "Sai Rajeswari Institute of Technology",
      program: "DSA & Python Training",
      vendor: "Campus Connect",
      file: "SRIT.jpg",
      details: "Conducted workshops on programming complexity, logical design, and array manipulation algorithms."
    },
    {
      name: "Anand Institute of Higher Education",
      program: "Python Full Stack",
      vendor: "Campus Connect",
      file: "anand college.jpg",
      details: "Taught backend coding, web services structure, HTML/CSS design, and database relationships."
    },
    {
      name: "Kalasalingam Academy of Research and Education",
      program: "Data analytics and PowerBI",
      vendor: "Direct / Freelance",
      file: "Kalasalingam.jpg",
      details: "Conducted specialized bootcamps on data analysis methodologies, data modeling, and reporting dashboard designs with Power BI."
    },
    {
      name: "SVCE Tirupati",
      program: "Python & Coding Prep",
      vendor: "ByteXL",
      file: "SVCE tirupathi.jpeg",
      details: "Mentored final year students on technical coding problems for product-based interview readiness."
    },
    {
      name: "Saveetha University",
      program: "Java Programming & OOP",
      vendor: "Campus Connect",
      file: "Savitha University.jpg",
      details: "Instructed Java classes on OOP principles, runtime memory models, inheritance, and libraries."
    },
    {
      name: "Dr. MGR Educational and Research Institute",
      program: "Java DSA",
      vendor: "TrueNook",
      file: "MGR university.jpg",
      details: "Conducted comprehensive bootcamps on trees, graph theory, stack implementation, and Java DSA constructs."
    },
    {
      name: "Danish Ahmed Engineering College",
      program: "Data Science",
      vendor: "Campus Connect",
      file: "Danish.jpg",
      details: "Introduced data cleansing, regression patterns, NumPy/Pandas modeling, and predictive metrics."
    },
    {
      name: "A.M. Jain College",
      program: "Employability Skills (Naan Mudhalvan)",
      vendor: "Naan Mudhalvan",
      file: "AM jain college.jpg",
      details: "Prepared final years for corporate recruitment through cognitive, technical, and communication sessions."
    },
    {
      name: "Kovai Arts and Science College",
      program: "Employability Skills Trainer",
      vendor: "Naan Mudhalvan",
      file: "Kovai Arts.jpg",
      details: "Facilitated placement and interview coaching, resume optimization, and mock panel interviews."
    },
    {
      name: "Mohamed Sathak Engineering College",
      program: "Placement Prep & Mock Interviews",
      vendor: "Direct / Freelance",
      file: "Mohamath sathak.jpg",
      details: "Designed custom mock coding sheets and feedback panels to prepare engineering graduates."
    },
    {
      name: "Mother Theresa",
      program: "Java Full Stack",
      vendor: "New Leaf",
      file: "Mother therasa.jpg",
      details: "Instructed full-stack concepts using core Java, relational databases, HTML layout, and RESTful APIs."
    }
  ];

  return (
    <section id="education" className="section" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Campus Footprint</h2>
          <p className="section-subtitle">Academic background and my active footprints in schools and universities across Tamil Nadu.</p>
        </div>

        {/* Primary Timeline Grid */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {education.map((edu, idx) => {
            const isHighlighted = selectedCollege && isCollegeMatch(edu.school, selectedCollege);

            return (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  padding: 0,
                  border: isHighlighted ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
                  boxShadow: isHighlighted ? '0 0 25px rgba(56, 189, 248, 0.4)' : 'none',
                  transform: isHighlighted ? 'scale(1.03)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ height: '180px', position: 'relative', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={edu.image} 
                    alt={edu.school} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(11, 19, 41, 0.2) 50%, rgba(11, 19, 41, 0.95) 100%)'
                  }} />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                    {edu.school}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.75rem' }}>
                    {edu.degree}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                    <span style={{ color: 'rgba(186, 230, 253, 0.2)' }}>|</span>
                    <Star size={12} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{edu.grade}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', textAlign: 'justify', marginTop: 'auto' }}>
                    {edu.description}
                  </p>

                  {idx === 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {["Data Structures", "OOP", "DBMS"].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => {
                            onHighlightSkill(tag);
                            scrollToElement('skills');
                          }}
                          style={{
                            background: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)',
                            borderRadius: '4px',
                            color: 'var(--color-primary)',
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.4rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          className="glow-on-hover"
                        >
                          Highlight {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client College Footprints Section */}
        <div style={{ borderTop: '1px solid rgba(186, 230, 253, 0.08)', paddingTop: '3rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Training Campus Footprints
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            Hover over any campus card (or click a vendor above) to reveal full training details and vendor partnerships.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}>
            {clientColleges.map((col, idx) => {
              const isColHighlighted = selectedCollege && isCollegeMatch(col.name, selectedCollege);
              const isVendorHighlight = selectedVendor && selectedVendor.colleges.some(vc => isCollegeMatch(col.name, vc));
              const isHighlighted = isColHighlighted || isVendorHighlight;

              const imgUrl = import.meta.env.BASE_URL + "images/client-colleges/" + encodeURIComponent(col.file);

              return (
                <div
                  key={idx}
                  className={`reveal-card ${isHighlighted ? 'highlighted' : ''}`}
                  style={{
                    border: isHighlighted ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
                    boxShadow: isHighlighted ? '0 0 25px rgba(56, 189, 248, 0.5)' : 'none',
                    transform: isHighlighted ? 'scale(1.02)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={col.name}
                    className="reveal-card-bg"
                  />
                  
                  {/* Glass Reveal Overlay Drawer */}
                  <div className="reveal-overlay">
                    <div style={{ minHeight: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: '1.25',
                        margin: 0
                      }}>
                        {col.name}
                      </h4>
                    </div>

                    {/* Revealing content panel */}
                    <div className="reveal-content" style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Training Program</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 700 }}>{col.program}</span>
                      </div>

                      {col.vendor && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Vendor Partner</span>
                          <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>{col.vendor}</span>
                        </div>
                      )}

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: '0.25rem', borderTop: '1px solid rgba(186, 230, 253, 0.1)', paddingTop: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Key Modules Covered</span>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0, textAlign: 'justify' }}>
                          {col.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .reveal-card {
          position: relative;
          height: 240px;
          border-radius: 12px;
          overflow: hidden;
          background: #0f172a;
          cursor: pointer;
        }
        .reveal-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .reveal-card:hover .reveal-card-bg, .reveal-card.highlighted .reveal-card-bg {
          transform: scale(1.1);
        }
        .reveal-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(186, 230, 253, 0.15);
          padding: 0.75rem 1rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .reveal-card:hover .reveal-overlay, .reveal-card.highlighted .reveal-overlay {
          height: 100%;
          background: rgba(11, 19, 41, 0.96);
          overflow-y: auto;
        }
        .reveal-content {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.1s;
        }
        .reveal-card:hover .reveal-content, .reveal-card.highlighted .reveal-content {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
