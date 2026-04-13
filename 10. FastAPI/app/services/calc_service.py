from pydantic import BaseModel
from fastapi import APIRouter
from app.api.q2 import CalcService

class CalcRequest(BaseModel):
    a: int
    b: int
    op: str

router = APIRouter()  # ← () 괄호 빠짐
service = CalcService()

@router.post("/calc")
def calc(request: CalcRequest):  # ← 핸들러 함수 없었음
    result = service.calculate(request.a, request.b, request.op)
    return {"result": result}