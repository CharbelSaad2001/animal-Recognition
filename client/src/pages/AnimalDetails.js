import React, { useState, useEffect } from "react";
import AnimalDetailsSection from "../components/AnimalDetailsSection";
import { useLocation, useNavigate } from "react-router"; // Agregado useNavigate
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importar estilos de Leaflet
import L from "leaflet";

const animalData = {
  basicDetails: [
    { label: "Nombre Común", value: "Oso Hormiguero" },
    { label: "Nombre Científico", value: "Tamandua tetradactyla" }
  ],
  physicalDetails: [
    { label: "Tipo de Movimiento", value: "Terrestre" },
    { label: "Peso Promedio", value: "150 kg" },
    { label: "Altura Promedio", value: "1.2 m" },
    { label: "Población Promedio", value: "Desconocida" },
    { label: "¿Está en peligro de extinción?", value: "Sí" },
    { label: "Herbívoro", value: "Sí" }
  ],
  characteristics: [
    { label: "Edad", value: "Adulto" },
    { label: "Género", value: "Masculino" }
  ],
  measurements: [
    { label: "Longitud", value: "2.5 m" },
    { label: "Reino", value: "Animalia" } // Colocado reino al lado de longitud
  ],
  additionalInfo: [] // Asegurarse de que additionalInfo esté definido
};

function AnimalDetails() {
  const location = useLocation();
  const navigate = useNavigate(); // Inicializado navigate
  const image = location.state?.image;
  const acertacion = 90; // Porcentaje de acertación como número
  console.log(image); // Imprimir la imagen en la consola al entrar a la vista

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //estas son las coordenadas que debemos recibir
  const mapConfig = {
    lat: 8.298, 
    lng: -62.718, 
    zoom: 6
  };

  const markerIcon = new L.Icon({
    iconUrl: require('../images/marker.png'),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  // Determinar el color según el porcentaje de acertación
  const getColor = (acertacion) => {
    if (acertacion > 80) return '#8DBCAE'; // Color verde
    if (acertacion > 60) return '#FDA400'; // Color amarillo
    return '#Df5800'; // Color rojo
  };

  return (
    <div>
      <div className={`header-bar ${isScrolled ? "scrolled" : ""}`} style={{ backgroundColor: "rgba(211, 211, 211, 0.8)" }}>
        <button className="header-button" style={{ marginLeft: 'auto', marginRight: '30px' }} onClick={() => navigate('/upload')}>Hacer nueva búsqueda</button>
      </div>
      <div className="details-container">
        <div className="content-wrapper">
          <div className="main-content">
            <div className="details-card">
              <img
                loading="lazy"
                src={image} // Usar la imagen cargada desde Upload.js
                className="animal-image"
                style={{ maxWidth: "600px", maxHeight: "400px" }} // Limitación de tamaño
              />
              <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
                <div className="circle" style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%', 
                  backgroundColor: getColor(acertacion), 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold' 
                }}>
                  {acertacion}%
                </div>
                <div className="rating-box" style={{ backgroundColor: getColor(acertacion), marginLeft: '20px', padding: '10px', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="rating-label" style={{ color: "#fff" }}>{acertacion > 80 ? 'definitiva' : acertacion > 60 ? 'segura' : 'débil'}</div>
                </div>
              </div>
              <h2 className="section-title">Detalles</h2>
              <div className="details-grid">
                <AnimalDetailsSection items={animalData.basicDetails} />
                <AnimalDetailsSection items={animalData.physicalDetails} />
                <AnimalDetailsSection items={animalData.characteristics} />
                <AnimalDetailsSection items={animalData.measurements} />
                <AnimalDetailsSection items={animalData.additionalInfo || []} /> {/* Asegurarse de que additionalInfo sea un array */}
              </div>
              <h2 className="section-title">Ubicaciones</h2>
              <div style={{ width: "100%" }}>
                <MapContainer center={[mapConfig.lat, mapConfig.lng]} zoom={mapConfig.zoom} style={{ height: "400px", width: "100%", marginBottom: "50px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                  <TileLayer
                    attribution="Tiles &copy; Carto"
                    url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=tecr1q77EFvcJ2WeZl1p&zoom=12"
                  />
                  <Marker position={[mapConfig.lat, mapConfig.lng]} icon={markerIcon} />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
          background-color: rgba(211, 211, 211, 0.8);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          transition: top 0.3s;
          z-index: 1000;
        }
        .header-bar.scrolled {
          top: 0;
        }
        .header-button {
          padding: 10px 20px;
          background-color: #44578D;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .header-button:hover {
          background-color: #8DBCAE;
        }
        .animal-details {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: start;
          font: 700 18px Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .details-container {
          background-color: #fff;
          display: flex;
          min-height: 800px;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
          margin-top: 1000px;
        }
        .content-wrapper {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .main-content {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
        }
        .details-card {
          display: flex;
          min-width: 240px;
          width: 100%;
          max-width: 960px;
          flex-direction: column;
          overflow: hidden;
          flex: 1;
        }
        .animal-image {
          object-fit: contain;
          object-position: center;
          width: 100%;
          height: auto; // Cambiado a auto para mantener la proporción
        }
        .section-title {
          color: #121714;
          padding: 16px 16px 8px;
          line-height: 1;
          margin: 0;
        }
        .details-grid {
          display: flex;
          width: 100%;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          padding: 16px;
        }
        .ratings-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .rating-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          width: 100px;
        }
        .rating-value {
          font-size: 16px;
          font-weight: bold;
        }
        .rating-label {
          font-size: 12px;
          color: #666;
        }
        .footer-border {
          min-height: 546px;
          padding: 12px 0;
        }
        @media (max-width: 991px) {
          .details-container,
          .content-wrapper,
          .header-border,
          .main-content,
          .details-card,
          .section-title,
          .details-grid,
          .footer-border {
            max-width: 100%;
          }
          .section-title {
            white-space: initial;
          }
        }
      `}</style>
    </div>
  );
}

export default AnimalDetails;