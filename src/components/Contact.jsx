import React, { useState } from 'react';
import { Send, CheckCircle, Mail } from 'lucide-react';

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Interested in placement workshops, coding bootcamps, or data consulting? Drop a message!</p>
        </div>

        <div className="glass-panel" style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid var(--glass-border)',
          background: 'rgba(28, 37, 65, 0.3)'
        }}>
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <CheckCircle size={48} style={{ color: 'var(--color-primary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Thank you, Ramkumar will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle} 
                  placeholder="John Doe" 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle} 
                  placeholder="john@example.com" 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }} 
                  placeholder="Hi Ramkumar, we would love to have you conduct a workshop..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{
                justifyContent: 'center',
                padding: '0.85rem',
                borderRadius: '12px',
                marginTop: '0.5rem'
              }}>
                Send Message <Send size={16} />
              </button>
            </form>
          )}

          {/* Direct WhatsApp, LinkedIn, and Email Action Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '2rem',
            borderTop: '1px solid rgba(186, 230, 253, 0.1)',
            paddingTop: '1.5rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              Or reach out directly via:
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/917639506694" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary glow-on-hover" 
                style={{ 
                  flex: 1, 
                  justifyContent: 'center', 
                  minWidth: '120px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <WhatsappIcon style={{ color: '#25D366' }} /> WhatsApp
              </a>
              <a 
                href="https://www.linkedin.com/in/ramkumar-rajendiran-8037431aa/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary glow-on-hover" 
                style={{ 
                  flex: 1, 
                  justifyContent: 'center', 
                  minWidth: '120px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <LinkedinIcon style={{ color: '#0077B5' }} /> LinkedIn
              </a>
              <a 
                href="mailto:rk8070039@gmail.com" 
                className="btn btn-secondary glow-on-hover" 
                style={{ 
                  flex: 1, 
                  justifyContent: 'center', 
                  minWidth: '120px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <Mail size={16} style={{ color: 'var(--color-primary)' }} /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem'
};

const labelStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text-secondary)'
};

const inputStyle = {
  background: 'rgba(15, 23, 42, 0.45)',
  border: '1px solid var(--glass-border)',
  borderRadius: '10px',
  color: '#ffffff',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'all 0.3s ease'
};
