package kr.co.study;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String goHome(Model model) {
		model.addAttribute("name", "홍길동");
		model.addAttribute("message", "<strong>안녕하세요</strong>");
		
		List<String> items = Arrays.asList("item1", "item2", "item3");
		model.addAttribute("items", items);
		return "index";
	}
}


