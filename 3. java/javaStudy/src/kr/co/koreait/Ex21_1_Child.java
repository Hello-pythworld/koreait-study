package kr.co.koreait;

public class Ex21_1_Child extends Ex21_1_Parent {
	
	Ex21_1_Child() {
		super();
		System.out.println("자식 생성자입니다.");
	}
	
	public void childInfo() {
		
		
		System.out.println("자식 클래스의 childInfo() 입니다.");
	}
}
