package kr.co.ai_project;

import lombok.Getter;
import lombok.Setter;

public class AiDTO {
	
	@Getter
	@Setter
	public static class RequestAi {
		private String prompt;
	}
}
