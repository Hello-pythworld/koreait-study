package kr.co.study.board.service;

import java.util.List;

import org.springframework.data.domain.Page;

import kr.co.study.board.dto.ReqBoardDTO;
import kr.co.study.board.dto.ResBoardDTO;

/**
 * 게시판 관련 서비스 인터페이스
 *  - 게시판과 관련된 핵심 비즈니스 로직을 정의하는 서비스 계층
 *  - Controller → Service → Repository 흐름에서 서비스 계층을 담당
 *  - 게시판에서 구현해야 할 메서드들을 미리 추상 메서드로 작성해둠.
 */
public interface BoardService {

	/**
	 * 게시글 작성 기능
	 * 
	 * 기능
	 * 1. 작성자 조회
	 * 2. 해당 작성자가 맞다면 Board 엔티티 작성
	 * 3. DB 저장
	 * @param request 사용자가 입력한 글쓰기 데이터
	 * @param writerId 로그인한 회원의 ID
	 */
	void write(ReqBoardDTO request, Long writerId);
	/**
	 * 게시글 리스트 조회기능
	 *  -boardType으로 게시판종류를 확인 후 조회
	 *  - 조회된 Board 엔티티를 Response DTO 타입으로 변환
	 * @return
	 */
	
	/**
	 * 게시글 상세보기 조회
	 *  - PK를 기준으로 조건 검색
	 *  - PK로 조건을 주므로 조회 결과는 무조건 1개의 게시글
	 * 
	 * @param id 게시글 PK
	 * @return
	 */
	ResBoardDTO getBoardDetail(Long id);
	Page<ResBoardDTO> getBoardList(int page);
}
