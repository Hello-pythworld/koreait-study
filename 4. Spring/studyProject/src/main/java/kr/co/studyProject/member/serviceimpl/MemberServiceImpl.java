package kr.co.studyProject.member.serviceimpl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import kr.co.studyProject.member.dto.ReqRegisterDTO;
import kr.co.studyProject.member.entity.Member;
import kr.co.studyProject.member.repository.MemberRepository;
import kr.co.studyProject.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public void register(ReqRegisterDTO request) {
        // 1️⃣ 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(request.getPassword());

        // 2️⃣ Member 엔티티 생성 및 값 세팅
        Member member = new Member();
        member.setUserName(request.getUserName());
        member.setEmail(request.getEmail());
        member.setPassword(encodedPassword);
        member.setNickName(request.getNickName());
        member.setPhoneNumber(request.getPhonenumber());

        // 3️⃣ DB 저장
        memberRepository.save(member);
    }
}