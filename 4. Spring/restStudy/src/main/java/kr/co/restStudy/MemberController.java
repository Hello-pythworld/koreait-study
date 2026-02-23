package kr.co.restStudy;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController // @Controller + @ResponseBody
@RequestMapping("/api")
public class MemberController {

	@PostMapping("/{id}")
	public ResponseEntity findMember(@PathVariable("id") Long id) {
		Member m = new Member();
		m.setId(id);
		m.setName("홍길동");
		m.setAddr("인천");

		return new ResponseEntity(m, HttpStatus.OK);

	}
}
