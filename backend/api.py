from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

@app.get("/images/{image_id}")
async def serve_image(image_id: str):
    return FileResponse(f"{image_id}.jpeg")
