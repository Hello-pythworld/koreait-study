from fastapi import APIRouter

from app.schemas.request import InferenceRequest
from app.schemas.response import InferenceResponse
from app.services.InferenceService import InferenceService

# localhost:8080/api/v1/inference
router = APIRouter(prefix="/inference")
service = InferenceService()

# response_model : 반환 값을 InferenceResponse 형태로 변환
@router.post("/predict", response_model=InferenceResponse)
def predict(request: InferenceRequest):
    return service.predict(request.text)