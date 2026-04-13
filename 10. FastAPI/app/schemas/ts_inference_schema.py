from pydantic import BaseModel


class TsInferenceSchema(BaseModel):
    x: float

class TsInferenceResponse(BaseModel):
    input: float
    output: float

    class TsInferenceRequest(BaseModel):  # ← 이거 추가
        x: float

    class TsInferenceResponse(BaseModel):
        input: float
        output: float


class TsInferenceRequest:
    pass