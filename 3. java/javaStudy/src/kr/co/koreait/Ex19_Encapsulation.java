package kr.co.koreait;

import kr.co.training.Test;

// 캡슐화
//  - 불필요한 정보를 노출시키지 않는 개념
//		> 객체의 내부 구현을 외부로부터 숨김 (정보 은닉)
//		> 잘못된 접근으로부터 보호


//	클래스 접근 제어자
//	 - public : 전체 패키지에서 접근 가능
//	 - (default) : 같은 패키지에서만 접근 가능
public class Ex19_Encapsulation {
//	필드, 메서드의 접근 제어자
//	 - public : 어디서든 접근 가능
//	 - protected : 다른 패키지에 있더라도 상속 관계라면 사용 가능
//	 - (default) : 같은 패키지에서만 사용 가능
//	 - private : 같은 클래스에서만 사용 가능
	public static void main(String[] args) {
		Ex19_1_Test t = new Ex19_1_Test();
		
		Test t2 = new Test();

		t2.num1 = 10;
		
		t2.num2 = 20;
		
		t2.num3 = 30;
//public int num1;
//	
//		int num2;
//	
//		private int num3;
//		default는 같은 패키지 내에서만 접근 가능
//	private은 같은 클래스내에서만 접근 가능하다.
	}

}
