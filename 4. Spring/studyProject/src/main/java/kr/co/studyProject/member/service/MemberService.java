package kr.co.studyProject.member.service;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import kr.co.studyProject.member.dto.ReqRegisterDTO;

@Service
public interface MemberService {
	
	@Transactional
	void register(ReqRegisterDTO request);

}
