from app.models.load_ts_model import loadTsModel
import numpy as np



class TsInferenceService:
    def __init__(self):
        self.model = loadTsModel()

    def predict(self, x: float) -> float:
        # TensorFlow 입력 형식으로 변환
        #   - x가 5라면 [[5.0]]으로 던짐
        #   - 2차원 배열 형태로 던짐(Dense Layer가 2차원 배열을 요구함)
        input_data = np.array( [x], dtype=np.float32)

        # 모델 객체를 통해서 예측을 수행
        #   - 결과는 배열 형태로 반환
        #   - ex) [[10.0]]
        prediction = self.model.predict(input_data)

        # 2차원 배열에서 실제 값만 추출 후 반환
        #   - [[10.0]] -> 10.0
        return float(prediction[0][0])