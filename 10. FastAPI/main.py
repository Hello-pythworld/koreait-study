from fastapi import FastAPI
from app.api.routes import router as api_router

app = FastAPI()
app.include_router(api_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Hello World"}

# 실행 방법 : uvicorn main:app --reload
#   - main : main.py 파일을 실행하겠다.
#   - app : main.py 파일 안에 있는 app 객체를 실행하겠다.
#   - --reload : 파일에 변경 사항이 생기면 재실행 하겠다.