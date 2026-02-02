package kr.co.koreait;

public class Ex21_3_Dog extends Ex21_3_Animal {

	Ex21_3_Dog (String name, int age) {
		super(name, age);
	}
	public void wagTail() {
		System.out.println("강아지가 꼬리를 흔듭니다!");
	}
}