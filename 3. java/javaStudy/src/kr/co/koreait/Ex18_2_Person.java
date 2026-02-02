package kr.co.koreait;

public class Ex18_2_Person {
//	 필드 선언만
//	 이름(name)
//	 나이(age)
//	 주소(addr)
//	 핸드폰번호(phone)
	
//	introduce 메서드
//	 - "이름 : OOO"
//	 - "나이 : OOO"
//	 - "주소 : OOO"
//	 - "핸드폰번호 : OOO"
		String name;
		int age;
		String addr;
		String phonenumber;
		
		final static String HOBBY = "잠자기";
		
//		이름하고 나이만 받는 생성자
//		 - 주소랑 핸드폰 번호는 기본값을 지정해서 줌.
		
		
//		이름만 받는 생성자
//		 - 나머지 값을 this() 활용해서 초기화 진행
//		 - age : 0, addr : "인천", phone : "010-1234-1234"
//		 - 매개변수 4개를 받는 생성자를 호출하여 초기화 진행
		Ex18_2_Person(String name) {
			this(name, "인천", 0, "010-1234-1234"); 
		}
		
		Ex18_2_Person(String name, int age) {
//			생성자 this()
//			 - 같은 클래스의 다른 생성자를 호출할 때 사용(생성자 재사용)
//			 - 반드시 첫 줄에 선언되어야 함.
			this(name, "지구", age , "아직 없음");
//			this.name = name;
//			this.age = age;
//			this.addr = "지구"; 
//			this.phonenumber = "아직 없음";
					
		}
		
		Ex18_2_Person(String inputName, String addr, int age, String phonenumber) {
			System.out.println("생성자가 호출되었습니다.");
			this.name = inputName;
			this.age = age;
			this.addr = addr;
			this.phonenumber = phonenumber;
		}
		public void introduce() {
			System.out.println("ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ");
			System.out.println("이름 : " + name);
			System.out.println("나이 : " + age);
			System.out.println("주소 : " + addr);
			System.out.println("핸드폰번호 : " + phonenumber);
		}
	
	
	
	
}
