from fastapi import FastAPI, File, UploadFile
import numpy as np
from PIL import Image
import io
import os
from core import classify_image

app = FastAPI(title="Amazon Rainforest Wildlife Detection and Classification API", version="0.1.0")


UPLOADS_DIR = "uploads"
os.makedirs(UPLOADS_DIR, exist_ok=True)

@app.get("/hi")
def read_root():
    return {"Hello": "Worlds"}

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    print("Hello World")
    image_data = await file.read()

    image = Image.open(io.BytesIO(image_data))
    image = image.resize((1280, 1280))
    img_array = np.array(image)

    # Asegúrate de que la imagen tenga el formato correcto (C, H, W)
    if img_array.ndim == 2:  # Si es una imagen en escala de grises
        img_array = np.stack((img_array,) * 3, axis=-1)  # Convertir a RGB
    img_array = img_array.transpose(2, 0, 1)  # Cambiar a (C, H, W)

    # TODO: Quitar cuando se implemente la clasificación
    original_image_path = os.path.join(UPLOADS_DIR, f"original_{file.filename}")
    image.save(original_image_path)

    result = classify_image(img_array)

    return result
