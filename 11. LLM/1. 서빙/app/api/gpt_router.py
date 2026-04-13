from unittest import result

from fastapi import APIRouter

from app import service
from app.schemas.gpt_schema import GPTResponse, GPTRequest
from app.service.gpt_service import GPTService

router = APIRouter(prefix="/gpt", tags=["GPT"])
service = GPTService()

@router.post("/generate", response_model=GPTResponse)
def generate_text(req: GPTRequest):

    response = service.generate_text(
        prompt = req.prompt,
        max_completion_tokens = req.max_completion_tokens,
        temperature = req.temperature
    )

    return GPTResponse(result=response)