from fastapi import FastAPI
from app.api import gpt_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FastAPI GPT 서비스",
    version ="1.0.0"
)

# CORS 허용 설정
origins = [
    "http://localhost:8080",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gpt_router.router)

@app.get("/")
def read_root():
    return {"message": "GPT API 서버가 실행중입니다."}
