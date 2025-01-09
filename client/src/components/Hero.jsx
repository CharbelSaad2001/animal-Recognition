import * as React from 'react';
import { Link } from "react-router";


export function Hero() {
  return (
    <div className="hero-section">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/392b965bfb6795031da48cd3c9ffef227a3deec6741e01dff36a87b1e5f57d7f?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e" 
        alt="Amazon rainforest background" 
        className="hero-background" 
      />
      <div className="hero-content">
        <h1 className="hero-title">Reconocimiento de Animales Amazónicos</h1>
        <p className="hero-description">
          Descubre y aprende sobre la biodiversidad de la Amazonía con la ayuda de la inteligencia artificial.
        </p>
        <Link to="/upload">
            <button className="upload-button">
                <span className="button-text">Subir una Foto</span>
            </button>
        </Link>
      </div>
      <style jsx>{`
        .hero-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh; 
          width: 80vw; 
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; 
          object-position: center;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: #fff;
          padding: 20px;
        }
        .hero-title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          position: relative;
          top: 120px;  
        }
        .hero-description {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          position: relative;
          top: 180px;  
        }

        .upload-button {
          background-color: #8DBCAE; /* Cambiado a 8DBCAE */
          color: white; /* Cambiado a blanco */
          font-size: 16px;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
          position: absolute;
          top: 200%;  
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .upload-button:hover {
          background-color: rgba(20, 200, 180, 1);
        }
      `}</style>
    </div>
  );
}
