package kr.co.koreait;



public class Ex21_2_Customer extends Ex21_2_Person{
	int memberId;
	
	Ex21_2_Customer(String name, int age, int memberId) {
		super(name, age);
		this.memberId = memberId;
	}
	
	void enter() {
		System.out.printf("회원 번호 : %d, %s(%d세)님이 입장하셨습니다.", memberId, name, age);
	}
}
