# 전체 흐름(서비스 호출 시점)
#   1. TsInferenceService 생성
#   2. loadTfModel() 실행 (서비스의 생성자 부분에서 실행)
#   3. TensorFlow 모델 생성 (y = 2x)
# ------------------------------------------------------------------
#   4. predict(입력값 x를 호출)
#   5. 입력값을 [[x]] 형태로 변환
#   6. model.predict() 호출
#   7. Dense Layer 계산 (y = 2x)
#   8. 결과를 [[y]]로 반환
#   9. float으로 변환 후 최종 결과 반환
from fastapi import APIRouter

from app.schemas.ts_inference_schema import TsInferenceResponse, TsInferenceRequest
from app.services.ts_inference_service import TsInferenceService


router = APIRouter()
service = TsInferenceService()

@router.post("/predict", response_model=TsInferenceResponse)
def predict(request: TsInferenceRequest):
    result = service.predict(request.x)

    return TsInferenceResponse(
        input = request.x,
        output = result
    )
