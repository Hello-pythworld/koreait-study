package kr.co.studyProject.member.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키 자동 증가(auto_increment)
	
	private String userName;
	private String email;
	private String nickName;
	private String password;
	private String passwordCheck;
	private String phonenumber;
	
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	
//	INSERT 되기 직전에 자동 실행되는 어노테이션
	@PrePersist
	public void prePersist() {
		this.createdAt = LocalDateTime.now();
	}
}
