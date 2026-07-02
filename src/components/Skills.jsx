import React from 'react';
import { Terminal, Database, LineChart, Code2, Cpu, Wrench } from 'lucide-react';

export default function Skills({ selectedTopic, highlightedSkill }) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={18} />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: <Code2 size={18} />,
      skills: ["HTML", "CSS", "JavaScript", "Django", "React.js", "Node.js"]
    },
    {
      title: "Data Analysis",
      icon: <LineChart size={18} />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Power BI", "Statistical Analysis"]
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={18} />,
      skills: ["VS Code", "Jupyter Notebook", "Android Studio", "Eclipse", "Git", "GitHub"]
    },
    {
      title: "Core Competencies",
      icon: <Cpu size={18} />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Subjects & Skills</h2>
          <p className="section-subtitle">Categorized breakdown of technical competencies and frameworks taught and utilized.</p>
        </div>

        <div className="grid-3">
          {skillCategories.map(cat => {
            const hasTopicMatch = selectedTopic && cat.skills.some(s => s.toLowerCase().includes(selectedTopic.toLowerCase()));
            const hasSkillMatch = highlightedSkill && cat.skills.some(s => s.toLowerCase().includes(highlightedSkill.toLowerCase()));

            return (
              <div 
                key={cat.title} 
                className="glass-panel" 
                style={{
                  padding: '2rem 1.5rem',
                  border: (hasTopicMatch || hasSkillMatch) 
                    ? '2px solid var(--color-primary)' 
                    : '1px solid var(--glass-border)',
                  boxShadow: (hasTopicMatch || hasSkillMatch) 
                    ? '0 0 20px rgba(56, 189, 248, 0.4)' 
                    : 'none',
                  transform: (hasTopicMatch || hasSkillMatch) ? 'scale(1.03)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: 'var(--color-primary)'
                  }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700 }}>
                    {cat.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {cat.skills.map(s => {
                    const isTopicHighlight = selectedTopic && s.toLowerCase().includes(selectedTopic.toLowerCase());
                    const isSkillHighlight = highlightedSkill && s.toLowerCase().includes(highlightedSkill.toLowerCase());
                    const isHighlighted = isTopicHighlight || isSkillHighlight;

                    return (
                      <span 
                        key={s} 
                        style={{
                          fontSize: '0.85rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          background: isHighlighted ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                          color: isHighlighted ? 'var(--bg-primary)' : 'var(--text-secondary)',
                          border: isHighlighted ? '1px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                          boxShadow: isHighlighted ? '0 0 10px rgba(56, 189, 248, 0.4)' : 'none',
                          fontWeight: isHighlighted ? 700 : 500,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
