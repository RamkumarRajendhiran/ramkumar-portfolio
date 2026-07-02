import React from 'react';
import { Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VendorNavbar({ vendors, selectedVendor, onSelectVendor }) {
  return (
    <div style={{ marginTop: '10rem', padding: '0 1.5rem', width: '100%' }}>
      <div className="glass-panel" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        background: 'rgba(28, 37, 65, 0.35)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={18} style={{ color: 'var(--color-primary)' }} />
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 700, 
            fontSize: '0.9rem', 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--color-primary)' 
          }}>
            Secondary Nav: Placement Training Vendors & Partners
          </span>
        </div>

        {/* Horizontal Scrolling Vendor Badges */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          overflowX: 'auto', 
          paddingBottom: '0.5rem',
          scrollbarWidth: 'thin'
        }}>
          <button 
            onClick={() => onSelectVendor(null)}
            className="glow-on-hover"
            style={{
              ...vendorBadgeStyle,
              background: selectedVendor === null ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedVendor === null ? 'var(--bg-primary)' : 'var(--text-primary)',
              borderColor: selectedVendor === null ? 'var(--color-primary)' : 'var(--glass-border)'
            }}
          >
            All Vendors / Clear Filter
          </button>
          
          {vendors.map(v => {
            const isSelected = selectedVendor?.name === v.name;
            return (
              <button 
                key={v.name}
                onClick={() => onSelectVendor(v)}
                className="glow-on-hover"
                style={{
                  ...vendorBadgeStyle,
                  background: isSelected ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--glass-border)',
                  whiteSpace: 'nowrap'
                }}
              >
                {v.name}
              </button>
            );
          })}
        </div>

        {/* Selected Vendor Partnership Info Box */}
        {selectedVendor && (
          <div style={{
            marginTop: '0.5rem',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            background: 'rgba(56, 189, 248, 0.06)',
            border: '1px dashed rgba(56, 189, 248, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong>{selectedVendor.name}</strong> partnerships:
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {selectedVendor.colleges.map((c, i) => (
                <React.Fragment key={c}>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-primary)', 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {c}
                  </span>
                  {i < selectedVendor.colleges.length - 1 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>&</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const vendorBadgeStyle = {
  padding: '0.5rem 1.25rem',
  borderRadius: '12px',
  border: '1px solid',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};
