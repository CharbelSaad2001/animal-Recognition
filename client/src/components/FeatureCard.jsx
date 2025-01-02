import React from 'react';



export function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
      <style jsx>{`
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 80px; /* Icon size */
          height: 80px;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0;
          color: #333;
        }

        .feature-description {
          font-size: 16px;
          color: #555;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
