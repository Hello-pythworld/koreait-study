package kr.co.ai_project;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;
	
	@GetMapping("/login")
	public ResponseEntity<?> login(UserDTO.RequestLogin req, HttpSession session) {
		UserDTO.ResponseLogin response = userService.login(req);
	
 	if(response==null) {
 		return ResponseEntity.status(401).build();
 	}
 	session.setAttribute("LOGIN_USER", response);
 	return ResponseEntity.ok(response);
}
}
