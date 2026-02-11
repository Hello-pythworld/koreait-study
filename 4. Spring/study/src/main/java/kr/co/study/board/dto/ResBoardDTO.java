package kr.co.study.board.dto;

import java.time.LocalDateTime;   // ⭐ 이 줄 추가

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResBoardDTO {

    private Long id;
    private String category;
    private String title;
    private String content;
    private String writerName;
    private LocalDateTime createdAt; // ⭐ 이름도 통일
}