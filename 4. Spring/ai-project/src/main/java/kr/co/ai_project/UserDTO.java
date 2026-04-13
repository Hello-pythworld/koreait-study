package kr.co.ai_project;

import lombok.Getter;
import lombok.Setter;

public class UserDTO {

	// 로그인 요청 DTO
	@Setter
	@Getter
	public static class RequestLogin {
		private String userId;
		private String password;
	}
	
	@Setter
	@Getter
	// 로그인 응답 DTO
	public static class ResponseLogin {
		private String userId;
		private String userName;
	}
}
