from pydantic import BaseModel
from fastapi import APIRouter

class CalcRequest(BaseModel):
    a: int
    b: int
    op: str

class CalcService:
    def calculate(self, a: int, b: int, op: str):
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "*":
            return a * b
        elif op == "/":
            return a / b

router = APIRouter()   # ← () 추가
service = CalcService()

@router.post("/calc")
def calc(request: CalcRequest):
    result = service.calculate(request.a, request.b, request.op)
    return {"result": result}