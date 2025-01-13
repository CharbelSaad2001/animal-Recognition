from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from core import classify_image

app = FastAPI(
    title="Amazon Rainforest Wildlife Detection and Classification API", 
    version="0.1.0"
)

# Configuración de CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Cambia esto por el origen de tu frontend
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos
    allow_headers=["*"],  # Permitir todos los encabezados
)

@app.get("/hi")
def read_root():
    return {"Hello": "Worlds"}

@app.post("/upload-image")
async def upload_image(file: UploadFile):
    result = await classify_image(file)
    return result
