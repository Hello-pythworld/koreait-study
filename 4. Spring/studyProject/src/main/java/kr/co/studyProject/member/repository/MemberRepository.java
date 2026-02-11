package kr.co.studyProject.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.studyProject.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

	boolean existsByUser(String userId); 
	boolean existsByemail(String email);
}
