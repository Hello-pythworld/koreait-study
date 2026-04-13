package kr.co.ai_project;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AiService {

	// 외부 API(FastAPI)와 통신하기 위한 객체
	private final RestTemplate restTemplate = new RestTemplate();
	
	/**
	 * FastAPI에 요청을 보내고 결과를 받아오는 메서드 
	 *
	 * @param userId : 사용자 식별자 (헤더로 FastAPI에게 전달)
	 * @param prompt : 사용자가 입력한 AI에게 전달할 질문
	 * @return FastAPI 응답 결과(String)
	 **/
	public String callFastApi(String userId, String prompt) {
		// 1. 요청할 URL 설정
		String url = "http://localhost:8000/gpt/generate";
		
		// 2. HTTP Header 구성
		HttpHeaders headers = new HttpHeaders();
		// -> JSON 형태로 요청 Body를 보내겠다.
		//	  Content-Type : application/json
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		// -> 커스텀 헤더 추가
		//	  FastAPI에서 사용자 식별용으로 사용
		headers.set("X-USER-ID", userId);

		// 3. 요청 Body 생성
		Map<String, String> body = new HashMap<>();
		body.put("prompt", prompt);
		
		// 4. HTTP 요청 객체 생성
		// -> HttpEntity는 위에서 만든 Header + Body를 하나로 묶은 객체
		HttpEntity<Map<String, String>> request = new HttpEntity<>(body, headers);
		
		// 5. 외부 API 호출 (FastAPI를 호출하는 부분)
		//  -> POST 요청으로 전송하고, 응답을 ResponseEntity로 받겠다.
		ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
				
		// 6. 응답 데이터 반환
		return response.getBody();
	}
}
