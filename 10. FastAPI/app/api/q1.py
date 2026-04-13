from fastapi import APIRouter

router = APIRouter(prefix="/q1")

@router.get("/convert/{value}")
def convert(value: str):
    if value.isdigit():
        num = int(value)
        return {"result": num*num}
    else:
        return {"result": value.upper()}

@router.get('/health')          # ← 들여쓰기 오류, convert 함수 밖으로 꺼냄
def health_check():
    return {'status': 'ok'}

@router.get('/hello/{name}')
def hello(name: str):
    return {
        "success": True,
        "data": f"Hello, {name}"
    }

user_list = [                   # ← 함수명 users와 변수명 충돌, user_list로 변경
    {"name": "이영훈", "age": 19},
    {"name": "홍길동", "age": 22},
    {"name": "짱구", "age": 5},
]

@router.get('/users')
def users(age: int = 0):
    result = []
    for user in user_list:      # ← user_list로 변경
        if user["age"] > age:   # ← >= 를 > 로 수정 (나이가 많은 유저만)
            result.append(user)
    return result