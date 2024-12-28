import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';


const features = [
    {
      icon: '🔍',
      title: 'Reconocimiento preciso con IA',
      description: 'Obtén resultados rápidos y confiables gracias a un sistema entrenado con miles de imágenes de la fauna amazónica.'
    },
    {
      icon: '🚀',
      title: 'Fácil de usar',
      description: 'Sube una foto o describe el animal, y recibe información detallada en pocos segundos.'
    },
    {
      icon: '🌱',
      title: 'Compromiso con la conservación',
      description: 'Promovemos la educación ambiental y sensibilización para proteger las especies en peligro de extinción.'
    }
  ];

  export default function Home() {
    return (
      <div className="container">
        <Hero />
        <section className="info-section">
          <div className="info-content">
            <h2 className="info-title">¿Cómo te ayudamos?</h2>
            <p className="info-description">
              Nuestra aplicación utiliza inteligencia artificial para identificar animales de la Amazonía a partir de imágenes. Con ella, puedes aprender sobre su hábitat, comportamiento y características. Contribuye al conocimiento de la biodiversidad amazónica y a su protección.
            </p>
          </div>
        </section>
        <section className="features-section">
          <h2 className="features-title">¿Por qué elegirnos?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
          }
  
          .info-section {
            text-align: center;
          }
  
          .info-title {
            font-size: 36px;
            font-weight: 900;
            margin-bottom: 15px;
          }
  
          .info-description {
            font-size: 18px;
            color: #555;
            line-height: 1.5;
            max-width: 800px;
            margin: 0 auto;
          }
  
          .features-section {
            text-align: center;
          }
  
          .features-title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
          }
  
          .features-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
  