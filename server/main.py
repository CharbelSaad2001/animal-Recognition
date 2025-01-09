from fastapi import FastAPI, File, UploadFile
import numpy as np
from PIL import Image
import io
import os
from core import classify_image
from dictionary import get_animal_info

app = FastAPI(title="Amazon Rainforest Wildlife Detection and Classification API", version="0.1.0")


UPLOADS_DIR = "uploads"
os.makedirs(UPLOADS_DIR, exist_ok=True)

@app.get("/hi")
def read_root():
    return {"Hello": "Worlds"}

@app.get("/animals/{nombre_comun}")
def animal(nombre_comun: str):
    return get_animal_info(nombre_comun)

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):

    result = await classify_image(file)

    return result
