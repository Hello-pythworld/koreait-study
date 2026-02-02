package kr.co.training;

public class Ex20_3_Member {

	
	public void introduce(Ex20_3_MemberInfo memberInfo) {
		String strStudent;
		
		if(memberInfo.getIsStudent()) {
			strStudent = "학생";
		} else {
			strStudent = "학생 아님";
		}
		
		memberInfo.getName();
		System.out.println("이름 :  " + memberInfo.getName());
		System.out.println("나이 :  " + memberInfo.getAge());
		System.out.println("사는 곳 : " + memberInfo.getAddr());
		System.out.println("학생여부 : "  + strStudent);
	}
}
