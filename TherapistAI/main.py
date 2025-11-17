from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
import asyncio
import traceback
import os
from google import genai
import guidelines

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=API_KEY)

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/ask")
async def ask_gemini(prompt_request: PromptRequest):
    prompt = guidelines.guidelines + prompt_request.prompt
    try:
        response = await asyncio.to_thread(
            lambda: client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt
            )
        )
        return {"response": response.text}
    except Exception as e:
        tb = traceback.format.exc()
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")