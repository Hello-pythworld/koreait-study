# OpenAI SDK import
#   -OpenAI API를 호출하기 위한 공식 라이브러리
from openai import OpenAI

# 프로젝트 환경 변수 가져오기
#   - OPENAI_API_KEY 등 외부 설정 값을 가져오기 위한 모듈

from app.core.config import settings

# 프롬프트를 가공 및 전처리하는 유틸 함수
#   - 사용자 입력을 LLM에 최적화된 형태로 변환
from app.utils.prompt_builder import build_prompt

# OpenAI 생성
#   - API Key를 기반으로 인증된 클라이언트 객체 생성
#   - 이후 모든 GPT 호출은 이 client를 통해 수행


client = OpenAI(api_key=settings.OPENAI_API_KEY)

class GPTService:
    def generate_text(self, prompt:str, max_completion_tokens:int, temperature:float):
        # 1. 프롬프트 전처리
        #   - 사용자가 입력한 프롬프트를 그대로 사용하지 않고
        #     시스템 규칙, 템플릿 등을 적용하여 최종 프롬프트 생성
        final_prompt = build_prompt(prompt)

        # 2. OpenAI 호출
        response = client.chat.completions.create(

                model="gpt-5.4-nano", # 사용할 모델 지정
                messages=[ # role 기반 구조(system / user / assistant)
                    {"role": "user", "content": final_prompt}
                ],
                max_completion_tokens=max_completion_tokens, # 응답 길이 제한
                temperature=temperature # 창의성 제어
        )
        # 응답 파싱
        return response.choices[0].message.content