package kr.co.koreait;

public class Ex21_Main extends Object{

	public static void main(String[] args) {
//		상속
//		 - 다른 클래스가 가지고 있는 필드, 메서드를 상속받아 재사용하는 것
//		 - 선언 방식 : class 클래스명 extends 상속받을 클래스명
//		 - 자바에서는 단일 상속만 가능 (부모는 1개만 가질 수 있음.)
//		 - 모든 클래스의 최상위 부모클래스는 Object 클래스를 가짐
		
//		 super()
//		  - 부모 클래스의 생성자를 호출
//		  - 첫줄에 다른 생성자를 호출하는 부분이 없다면 컴파일러가 super() 자동 삽입
//		 	> this() 등이 없다면
		
		
		Ex21_1_Child child = new Ex21_1_Child();
		child.name = "홍길동";
		child.info();
		child.childInfo();
		
	}

	
}
