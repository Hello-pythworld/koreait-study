from pydantic import BaseModel

class InferenceRequest(BaseModel):
    text: str #text라는 변수는 문자열이다.