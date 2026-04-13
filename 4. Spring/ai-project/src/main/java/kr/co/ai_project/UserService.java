package kr.co.ai_project;

import org.springframework.stereotype.Service;

@Service
public class UserService {

	public UserDTO.ResponseLogin login(UserDTO.RequestLogin req) {
		
		if("test".equals(req.getUserId()) && "1234".equals(req.getPassword())) {
			UserDTO.ResponseLogin response = new UserDTO.ResponseLogin();
			response.setUserId("test");
			response.setUserName("홍길동");
			
			return response;
		}
		
		return null;
	}
}
