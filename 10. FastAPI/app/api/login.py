from fastapi import APIRouter

from app.schemas.login_request import LoginRequest

router = APIRouter()

@router.post("/login")
def login(request: LoginRequest):
    return {"message": "success"}