from fastapi import FastAPI, APIRouter
from app.schemas.train_schema import TrainRequest, TrainResponse
from app.services.train_service import TrainService

router = APIRouter(prefix="/train")

@router.post("/req", response_model=TrainResponse)
def train(request: TrainRequest):
    result = TrainService().train(request.epochs)
    return result