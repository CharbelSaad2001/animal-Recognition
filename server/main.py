from fastapi import FastAPI, File, UploadFile
from core import classify_image

app = FastAPI(
    title="Amazon Rainforest Wildlife Detection and Classification API", 
    version="0.1.0"
)

@app.get("/hi")
def read_root():
    return {"Hello": "Worlds"}

@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    result = await classify_image(file)
    return result
