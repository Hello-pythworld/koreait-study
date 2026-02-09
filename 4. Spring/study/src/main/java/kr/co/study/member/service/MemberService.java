package kr.co.study.member.service;

import kr.co.study.member.dto.ReqRegisterDTO;

/**
 * 회원 도메인의 핵심 비즈니스 로직을 정의하는 서비스 인터페이스
 * 주로 Controller -> service -> Repository 흐름에서 서비스 계층의 역할을 담당.
 */
public interface MemberService {

	/**
	 * 회원가입을 처리하는 메서드
	 * 
	 * 기능 
	 *	- 비밀번호 암호화(BCrypt)
	 *	- 아이디/이메일 중복 체크
	 *	- Member 엔티티 생성 및 DB저장
	 *	- 필요한 경우 예외 발생 (ex. MemberException)
	 *
	 * @param request 사용자가 입력한 회원가입 정보를 담는 DTO
	 */
	void register(ReqRegisterDTO request);
}
