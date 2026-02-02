package kr.co.koreait;

public class Ex20_1_Person {
	private int age;
	private String name;
	private String addr;
	private boolean isStudent;
	
//	Setter
//	 - 반환 타입은 일반적으로 void
//	 - 메서드 명 : set 필드명
	public void setAge(int age) {
		this.age = age;
		this.name = name;
		this.addr = addr;
		this.isStudent = isStudent;
	}
	public void getAge(int age) {
		this.age = age;
		
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setAddr(String addr) {
		this.addr = addr;
	}
	
	public void isStudent(boolean isStudent) {
		this.isStudent = isStudent;
	}
	
//	Getter
//	 - 메서드명 : get 필드명
	public int getAge() {
		return age;
	}
	public String getName() {
		return name;
	}
	
	public String getAddr() {
		return addr;
	}
	public boolean isStudent() {
		return isStudent;
	}
}
