from pydantic import BaseModel

class GPTRequest(BaseModel):
    prompt: str
    max_completion_tokens: int = 20000
    temperature: float = 0.3
class GPTResponse(BaseModel):
    result: str