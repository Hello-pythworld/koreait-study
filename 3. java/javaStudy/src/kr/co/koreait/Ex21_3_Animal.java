package kr.co.koreait;

public class Ex21_3_Animal {

	public String name;
	public int age;
	
	Ex21_3_Animal(String name, int age){
		this.name = name;
		this.age = age;
	}
	
	public void eat() {
		System.out.printf("%s(%d)이(가) 먹는 중입니다.");
	}
	
	public void sleep() {
		System.out.println("%s(%d)이(가) 자는 중입니다.");
	}
}
