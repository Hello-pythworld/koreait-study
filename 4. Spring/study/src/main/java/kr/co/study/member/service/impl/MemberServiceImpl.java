package kr.co.study.member.service.impl;

import org.springframework.stereotype.Service;

import kr.co.study.member.dto.ReqRegisterDTO;
import kr.co.study.member.entity.Member;
import kr.co.study.member.repository.MemberRepository;
import kr.co.study.member.service.MemberService;
import lombok.RequiredArgsConstructor;



/**
 * MemberService 인터페이스의 구현체
 * 	- 회원과 관련도니 비즈니스 로직을 처리
 */
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
	private final MemberRepository memberRepository;
	
	@Override
	public void register(ReqRegisterDTO request) {
		// 1. 비밀번호 & 비밀번호 확인 검증
		if(!request.getPassword().equals(request.getPasswordCheck())) {
			System.out.println("비밀번호가 일치하지 않습니다.");
		}
//		2. Member 엔티티 생성
		Member member = new Member();
		member.setUserId(request.getUserId());
		member.setUserName(request.getUserName());
		member.setEmail(request.getEmail());
		member.setPassword(request.getPassword());
		
//		3. DB 저장
		memberRepository.save(member);
	}
}
