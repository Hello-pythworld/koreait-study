package kr.co.study.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.study.member.entity.Member;

/**
 * Member 엔티티와 관련된 DB 접근을 담당하는 Repository 인터페이스
 * 	- JpaRepository를 상속받아 기본 CRUD 기능 제공
 * 	- 제공되는 기본 기능 : save(), findById(), findAll(), delete() 등
 */
public interface MemberRepository extends JpaRepository<Member, Long> {

}
