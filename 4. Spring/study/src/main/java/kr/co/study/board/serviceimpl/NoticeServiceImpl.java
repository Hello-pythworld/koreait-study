//package kr.co.study.board.serviceimpl;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import kr.co.study.board.dto.ResBoardDTO;
//import kr.co.study.board.entity.Board;
//
//public class NoticeServiceImpl {
//
//	
//	
//	@Override
//	List<ResBoardList> getBoardList() {
////		1. 공지사항 게시글 전체 조회
//		List<Board>boardList = boardRepository.findByBoardTypeOrderByIdDesc("NOTICE");
//		
////		2. Entity 타입을 Response DTO 타입으로 변경
//		List<ResBoardDTO> list = new ArrayList<>();
//		ResBoardDTO response = new ResBoardDTO();
//		
//		for(Board b : boardList) {
//			response.setId(b.getId());
//			response.setTitle(b.getTitle());
//			response.setContent(b.getContent());
//			response.setWriterName(b.getWriter().getUserName());
//			response.setCreatedAt(b.getCreatedAt());		}
//		return list;
//	}
//}
//

package kr.co.study.board.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import kr.co.study.board.dto.ReqBoardDTO;
import kr.co.study.board.dto.ResBoardDTO;
import kr.co.study.board.entity.Board;
import kr.co.study.board.repository.BoardRepository;
import kr.co.study.board.service.BoardService;
import kr.co.study.member.entity.Member;
import kr.co.study.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoticeServiceImpl implements BoardService {
	private final BoardRepository boardRepository;
	private final MemberRepository memberRepository;

	@Override
	@Transactional
	public void write(ReqBoardDTO request, Long writerId) {
//	1. 작성자 조회
		Member writer = memberRepository.findById(writerId).orElse(null);

		if (writer == null) {
			System.out.println("유효하지 않은 사용자입니다.");
		}
		
		Board board = new Board();
		board.setBoardType("NOTICE");
		board.setCategory(request.getCategory());
		board.setContent(request.getContent());
		board.setTitle(request.getTitle());
		board.setWriter(writer);
		board.setViewCount(0);
		
		boardRepository.save(board);
	}

	@Override
	public List<ResBoardDTO> getBoardList() {

		// 1️⃣ 공지사항 게시글 전체 조회
		List<Board> boardList = boardRepository.findByBoardTypeOrderByIdDesc("NOTICE");

		// 2️⃣ Entity → DTO 변환
		List<ResBoardDTO> list = new ArrayList<>();

		for (Board b : boardList) {
			ResBoardDTO response = new ResBoardDTO();
			response.setId(b.getId());
			response.setCategory(b.getCategory());
			response.setTitle(b.getTitle());
			response.setContent(b.getContent());
			response.setWriterName(b.getWriter().getUserName());
			response.setCreatedAt(b.getCreatedAt());

			list.add(response);
		}

		// 3️⃣ 반환
		return list;
	}
}
