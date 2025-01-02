import * as React from "react";
import { UploadButton } from "./UploadButton";
import {useState} from "react"


 // Start of Selection
export function UploadPhoto() {
  const [imageSrc, setImageSrc] = useState(null);
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        console.log(e.target.result); // Muestra la imagen en la consola
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="upload-photo-container">
        <div >
          <div >
            <div >
              <div  />
            </div>
            <div >
              <div >
                <h1 className="title">Que animal es?</h1>
                <p className="subtitle">
                  Sube una foto de un animal para saber qué es
                </p>
                <UploadButton onUpload={handleUpload} imageSrc={imageSrc} />
                <p className="requirements">
                  La foto debe tener al menos 200x200 píxeles.
                </p>
                <div className="submit-section">
                  <button className="submit-button">
                    <span className="button-label">Aceptar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{
        
        `
  .upload-photo-container {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .main-content {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    min-height: 800px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    justify-content: start;
  }
  @media (max-width: 991px) {
    .main-content {
      max-width: 100%;
    }
  }
  .content-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
  }
  @media (max-width: 991px) {
    .content-wrapper {
      max-width: 100%;
    }
  }
  .header {
    border-color: rgba(229, 232, 235, 1);
    border-bottom-width: 1px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px 40px;
  }
  @media (max-width: 991px) {
    .header {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .header-content {
    align-self: stretch;
    display: flex;
    min-height: 40px;
    min-width: 240px;
    width: 100%;
    gap: 32px;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .header-content {
      max-width: 100%;
    }
  }
  .upload-section {
    display: flex;
    width: 100%;
    align-items: start;
    font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
    color: rgba(18, 23, 20, 1);
    font-weight: 700;
    justify-content: center;
    flex: 1;
    height: 100%;
  }
  @media (max-width: 991px) {
    .upload-section {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .upload-container {
    display: flex;
    min-width: 240px;
    width: 100%;
    max-width: 960px;
    flex-direction: column;
    overflow: hidden;
    justify-content: start;
    flex: 1;
    flex-basis: 0%;
  }
  @media (max-width: 991px) {
    .upload-container {
      max-width: 100%;
      padding-bottom: 100px;
    }
  }
  .title {
    width: 100%;
    font-size: 24px;
    line-height: 1;
    padding: 20px 16px 8px;
  }
  @media (max-width: 991px) {
    .title {
      max-width: 100%;
    }
  }
  .subtitle {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    padding: 4px 16px 12px;
  }
  @media (max-width: 991px) {
    .subtitle {
      max-width: 100%;
    }
  }
  .upload-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 16px;
  }
  @media (max-width: 991px) {
    .upload-box {
      max-width: 100%;
    }
  }
  .upload-area {
    border-radius: 12px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 56px 24px;
    border: 2px dashed rgba(219, 229, 227, 1);
  }
  @media (max-width: 991px) {
    .upload-area {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .upload-text {
    min-height: 23px;
    width: 87px;
    font-size: 18px;
    line-height: 1;
  }
  .file-button {
    border-radius: 20px;
    background-color: rgba(240, 245, 242, 1);
    display: flex;
    min-width: 84px;
    margin-top: 24px;
    min-height: 40px;
    align-items: center;
    overflow: hidden;
    font-size: 14px;
    justify-content: center;
    padding: 0 16px;
  }
  .button-text {
    align-self: stretch;
    overflow: hidden;
    margin: auto 0;
  }
  .requirements {
    width: 100%;
    font-size: 14px;
    color: rgba(99, 135, 122, 1);
    font-weight: 400;
    padding: 4px 16px 12px;
  }
  @media (max-width: 991px) {
    .requirements {
      max-width: 100%;
    }
  }
  .submit-section {
    display: flex;
    width: 100%;
    align-items: start;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    justify-content: start;
    padding: 12px 16px;
  }
  @media (max-width: 991px) {
    .submit-section {
      max-width: 100%;
      white-space: initial;
    }
  }
  .submit-button {
    border-radius: 20px;
    background-color: rgba(33, 222, 158, 1);
    display: flex;
    min-width: 84px;
    min-height: 40px;
    width: 480px;
    max-width: 480px;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    padding: 0 16px;
  }
  @media (max-width: 991px) {
    .submit-button {
      white-space: initial;
    }
  }
  .button-label {
    align-self: stretch;
    width: 56px;
    overflow: hidden;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .button-label {
      white-space: initial;
    }
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`
        
      }</style>
    </>
  );
}