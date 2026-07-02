import React from 'react';
import { Briefcase, Calendar, MapPin, Tag } from 'lucide-react';

export default function Experience({ selectedVendor, selectedCollege, selectedTopic }) {
  const experiences = [
    {
      role: "Online Tutor",
      company: "TCN Hyderabad",
      location: "Remote",
      period: "01/2026 – Present",
      topic: "Data Analysis",
      vendor: null,
      colleges: [],
      highlights: [
        "Conducted interactive remote tutoring sessions focusing on Data Analysis, using Python libraries (NumPy, Pandas, Matplotlib) and teaching statistical concepts.",
        "Created custom datasets and dashboards to demonstrate real-world analysis logic to students."
      ]
    },
    {
      role: "IT Trainer / Programming Instructor",
      company: "CSC Maduravoyal",
      location: "Tamil Nadu",
      period: "08/2024 – Present",
      topic: "React & Node.js",
      vendor: null,
      colleges: [],
      highlights: [
        "Led React and Node.js training programs, providing students with hands-on experience in full-stack web development, REST API design, SQL database management, and modern frontend application development."
      ]
    },
    {
      role: "Technical, Aptitude & Soft Skills Trainer",
      company: "Freelance Technical Trainer",
      location: "Tamil Nadu",
      period: "08/2024 – Present",
      topic: "DSA, Python, Java, MERN Stack, Django, SQL, Power BI",
      vendor: "Campus Connect, TrueNook, ByteXL, Infoziant, New Leaf",
      colleges: [
        "Sai Rajeswari Institute of Technology",
        "Anand Institute of Higher Education",
        "Kalasalingam Academy of Research and Education",
        "SVCE Tirupati",
        "Saveetha University",
        "Dr. MGR Educational and Research Institute",
        "Danish Ahmed Engineering College",
        "A.M. Jain College",
        "Kovai Arts and Science College",
        "Mohamed Sathak Engineering College",
        "Mother Theresa"
      ],
      highlights: [
        "Delivered hands-on technical training for undergraduate students across multiple engineering institutions including Sai Rajeswari Institute of Technology, Anand Institute of Higher Education, Kalasalingam Academy, and SVCE Tirupati.",
        "Conducted coding bootcamps on Data Structures & Algorithms (DSA), Python, MERN Stack, SQL, Django, Git/GitHub, Power BI, and Data Analysis with live application demonstrations.",
        "Instructed Java programming, DSA, OOP paradigms, and coding best practices at Saveetha University, Java DSA training at MGR University, and Java Full Stack bootcamps at Mother Theresa.",
        "Mentored students at Danish Ahmed Engineering College in programming fundamentals, logical reasoning patterns, and software development lifecycles.",
        "Served as an Employability Skills Trainer under the Naan Mudhalvan Project at A.M. Jain College and Kovai Arts and Science College.",
        "Delivered placement preparation coaching at Mohamed Sathak Engineering College, designing mock tests and conducting mock interviews."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Excelerate",
      location: "Remote",
      period: "06/2023 – 07/2023",
      topic: "Data Analysis",
      vendor: null,
      colleges: [],
      highlights: [
        "Completed an intensive 4-week data analysis internship performing data cleaning, preprocessing, validation, and exploratory data analysis (EDA) utilizing Python (Pandas, NumPy).",
        "Designed and implemented interactive Power BI dashboards to track performance metrics and present data-driven recommendations."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My teaching career, training engagements, corporate partnerships, and data internships.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--color-primary) 0%, rgba(186, 230, 253, 0.1) 100%)',
            boxShadow: 'var(--glow-shadow)',
            pointerEvents: 'none'
          }} />

          {experiences.map((exp, idx) => {
            const isVendorMatch = selectedVendor && exp.vendor && exp.vendor.toLowerCase().includes(selectedVendor.name.toLowerCase());
            const isCollegeMatchVal = selectedCollege && exp.colleges && exp.colleges.some(c => isCollegeMatch(c, selectedCollege));
            const isTopicMatch = selectedTopic && exp.topic && exp.topic.toLowerCase().includes(selectedTopic.toLowerCase());

            const isHighlighted = isVendorMatch || isCollegeMatchVal || isTopicMatch;
            const hasFiltersActive = selectedVendor || selectedCollege || selectedTopic;
            const shouldDim = hasFiltersActive && !isHighlighted;

            return (
              <div 
                key={idx} 
                className="glass-panel"
                style={{
                  marginLeft: '50px',
                  padding: '2rem',
                  border: isHighlighted ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
                  boxShadow: isHighlighted ? '0 0 20px rgba(56, 189, 248, 0.3)' : 'none',
                  opacity: shouldDim ? 0.45 : 1,
                  transform: isHighlighted ? 'scale(1.015)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '28px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: isHighlighted ? 'var(--color-primary)' : 'var(--bg-secondary)',
                  border: '3px solid var(--bg-primary)',
                  boxShadow: isHighlighted ? 'var(--glow-shadow)' : 'none',
                  transition: 'all 0.3s ease'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    {exp.role} <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>@ {exp.company}</span>
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                  {exp.topic && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Tag size={14} style={{ color: 'var(--color-primary)' }} />
                      <span><strong>Key Subjects:</strong> {exp.topic}</span>
                    </div>
                  )}
                </div>

                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      lineHeight: '1.5', 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      textAlign: 'justify'
                    }}>
                      <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {exp.colleges.length > 0 && (
                  <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(186, 230, 253, 0.1)', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Colleges Covered in Training Program
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.colleges.map(c => {
                        const isColHighlight = selectedCollege && isCollegeMatch(c, selectedCollege);
                        const belongsToSelectedVendor = selectedVendor && selectedVendor.colleges.some(vc => isCollegeMatch(c, vc));
                        const highlightBadge = isColHighlight || belongsToSelectedVendor;

                        return (
                          <span 
                            key={c} 
                            style={{
                              fontSize: '0.75rem',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '6px',
                              background: highlightBadge ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                              color: highlightBadge ? 'var(--color-primary)' : 'var(--text-secondary)',
                              border: highlightBadge ? '1px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                              fontWeight: highlightBadge ? 600 : 400
                            }}
                          >
                            {c}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
