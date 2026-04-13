
class InferenceService:

    #  매개변수 타입 -> 반환 타입
    def predict(self, text: str) -> dict:
        return {
            "label": text,
            "score": 0.95
        }