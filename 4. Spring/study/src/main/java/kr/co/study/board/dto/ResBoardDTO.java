package kr.co.study.board.dto;

import java.time.LocalDateTime;   // ⭐ 이 줄 추가

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResBoardDTO {

    private Long id;
    private String category;
    private String title;
    private String content;
    private String writerName;
    private LocalDateTime createdAt; // ⭐ 이름도 통일
    private int viewCount;
}