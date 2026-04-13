from pydantic import BaseModel


class InferenceResponse(BaseModel):
    labe: str
    score: float