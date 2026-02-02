package kr.co.training;

public class Ex20_1_Animal {
//	private 인스턴스 변수 name, age를 선언하세요.
	private String name;
	private int age;

	Ex20_1_Animal() {
		
	}
	Ex20_1_Animal(String name, int age) {
		this.name = name;
		this.age = age;
		}
	public void eat() {
		if(age>=0 && age<=1) {
			System.out.printf("%s(%d)가 분유를 먹는중입니다.\n ", name, age);
		} else if(age >= 2) {
			System.out.printf("%s(%d)가 사료를 먹는 중입니다.\n", name, age);
		}
	}
	
	public void setName(String name) {
		this.name = name;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	}
//	기본 생성자 작성
//	 - 매개변수가 하나도 없는 생성자
//	 - { }
	
//	 매개변수 2개를 받는 생성자
//	 - name과 age를 매개변수로 받아 인스턴스 변수에 할당하세요.
	
//	 eat() 메서드
//	  - 나이가 0~1살이면 "이름(나이) 가 분유를 먹는 중입니다." 출력
//	  - 나이가 2살 이상이면 "이름(나이)가 사료를 먹는 중입니다." 출력
	
//	인스턴스 변수에 대한 getter/setter를 작성하세요.
