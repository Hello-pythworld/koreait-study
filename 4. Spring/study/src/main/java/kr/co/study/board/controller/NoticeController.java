package kr.co.study.board.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import kr.co.study.board.dto.ReqBoardDTO;
import kr.co.study.board.dto.ResBoardDTO;
import kr.co.study.board.service.BoardService;
import kr.co.study.member.dto.ResLoginDTO;
import lombok.RequiredArgsConstructor;

@Controller //이거 안붙이면 bean으로 생성안함
@RequestMapping("/board/notice")
@RequiredArgsConstructor
public class NoticeController { //공지사항 컨트롤러
      
   private final BoardService boardService;
   /**
    * 공지사항 페이지로 이동하는 메서드
    * @return  notice.html
    */
   @GetMapping 
   public String noiticeList(Model model) {
      
	   /**
	    * 게시글 리스트 조회기능
	    *  - boardType으로 게시판 종류를 확인 후 조회
	    *  - 조회된 Board 엔티티를 Response DTO 타입으로 변환
	    */
	   
//      1. 공지사항 목록 조회
      List<ResBoardDTO> list = boardService.getBoardList();
//      2. 모델에 담아 타임리프에 전달
      model.addAttribute("list",list);
//      3. 타임리프로 이동 
      return "pages/board/notice";
   }
   
   
   
   
      @GetMapping("/create/form")
      public String createForm() {
         return "pages/board/notice-write";
      }
      
      @PostMapping("/create")
      public String create(ReqBoardDTO request, HttpSession session) {
//         System.out.println(request);  // request == request.toString
//         1. 로그인한 사용자 정보 세션에서 꺼내기
         ResLoginDTO loginUser = (ResLoginDTO) session.getAttribute("LOGIN_USER");
         
//         2. 로그인한 사용자가 아니라면 로그인 페이지로 이동
         if(loginUser == null) {
            return "redirect:/member/login/form";
         }
         
//         3. 게시글 저장
         boardService.write(request, loginUser.getId());
         
//         4. 목록으로 이동
         return "redirect:/board/notice";
      }
}
