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

@app.post("/ai-response")
async def ai_response(payload: dict):
    prompt_text = payload.get("prompt")
    timeout = httpx.Timeout(30.0, read=30.0)
    async with httpx.AsyncClient(timeout=timeout) as client:
        try:
            response = await client.post("http://ai_therapist:8000/ask", json={"prompt": prompt_text})
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as exc:
            return {"error": f"AI service error {exc.response.status_code}: {exc.response.text}"}