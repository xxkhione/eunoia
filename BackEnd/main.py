from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/ai-response")
async def ai_response(payload: dict):
    prompt_text = payload.get("prompt")
    async with httpx.AsyncClient() as client:
        response = await client.post("http://ai_therapist:8000/ask", json={"prompt": prompt_text})
        try:
            response.raise_for_status()
            ai_result = response.json()
            return ai_result
        except httpx.HTTPStatusError as exc:
            return {"error": f"AI service error {exc.response.status_code}: {exc.response.text}"}