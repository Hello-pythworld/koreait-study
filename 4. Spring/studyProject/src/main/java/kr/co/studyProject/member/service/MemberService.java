package kr.co.studyProject.member.service;

import org.springframework.stereotype.Service;

import kr.co.studyProject.member.dto.ReqRegisterDTO;

@Service
public interface MemberService {
	
	void register(ReqRegisterDTO request);

}
