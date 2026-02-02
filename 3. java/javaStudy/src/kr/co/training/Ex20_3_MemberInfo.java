package kr.co.training;

public class Ex20_3_MemberInfo {
	private String name;
	private int age;
	private String addr;
	boolean isStudent;
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public void setAddr(String addr) {
		this.addr = addr;
	}
	
	public void IsStudent(boolean isStudent) {
		this.isStudent = isStudent;
	}
	
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	
	public String getAddr() {
		return addr;
	}
	
	public boolean getIsStudent() {
		return isStudent;
	}
	
}
