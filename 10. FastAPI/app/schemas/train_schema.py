from pydantic import BaseModel


class TrainRequest(BaseModel):
    epochs: int

class TrainResponse(BaseModel):
        final_loss: float
        weight: float
        bias: float
        prediction: float