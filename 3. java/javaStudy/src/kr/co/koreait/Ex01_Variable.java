package kr.co.koreait;

public class Ex01_Variable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		System.out.println("Hello, World!");
		
		// 변수 선언
		// - 내가 varNum이라는 변수를 사용할거다.
		// - 참고 값을 리터럴이라고도 표현함.
		
		int varNum;
		
		varNum = 10;
		
		System.out.println(varNum);
	
		// 명시적 초기화
		// - 변수 선언과 초기화를 동시에 하는 것
		int num1 = 100;
		
		// <기본 자료형>
		// 1. 논리형 (true / false)
		boolean isStudent = true;	// 1byte
		
		// 2. 문자형 (단일 문자)
		//  - 반드시 ' '사용
		char grade = 'A';			// 2byte
		
		// 3. 정수형
		byte smallNumber = 127;		// 1byte
		short shortNumber = 32000;	// 2byte
		int age = 10;				// 4byte
		long population = 8000000000L; // 8byte
	
		// 4. 실수형
		float pi = 3.14F;			// 4byte
		double gravity = 9.80665;	// 8byte
		System.out.println(pi);
		System.out.println(gravity);
		// <비트>
		// - 컴퓨터에서 정보를 표현하기 위한 최소 단위
		// - 0 또는 1로 표현됨.
		
		// <바이트>
		// - 8개의 bit로 이루어진 단위
		// - 8bit = 1byte
		
		// 예를들어
		// 0 	1	1	1	0	0	1	0
		// 128  64	32	16	8	4	2	1	
		
		int userAge=19;
		System.out.println("유저 나이는 : " + userAge);
		userAge = 22;
		System.out.println("변경된 유저 나이는 : " + userAge);
		
		
		// 상수
		// - 상수는 값을 한번 초기화하면 수정할 수 없는 변수
		// - 관례적으로 대문자로 이루어진 스네이크 표기법을 사용.
		final int USER_AGE = 100;
//		USER_AGE = 200;
//		System.out.println("2번째 유저 나이는 : " + USERAGE);
		
		// <형변환>
		// - 변수에 이미 선언된 자료형(데이터 타입)을 변경하는 것
		
		
		// 자동 형변환 (암시적 형변환)
		// - 개발자가 직접 형변환을 해주지 않아도 컴파일 과정에서 자동으로 변환됨
		// - 범위가 작은 자료형 -> 범위가 큰 자료형
		byte num3 = 10;
		int num4 = num3; // 1byte -> 4byte
		System.out.println(num4);
		
		// 문자를 숫자로 바꾸면 아스키코드표에 있는 10진수가 나옴.
		// - a는 97 A는 65
		char ch = 'a';
		int num5 = ch;
		System.out.println(num5);
		
		//실수형은 메모리 설계상 양수보다 더 넓은 범위를 사용하기 때문에 가능
		long longNumber = 1000000000L;	//8byte
		float floatNumber = longNumber;	//8byte ->	//4byte
		System.out.println(floatNumber);
		
		// 강제 형변환(명시적 형변환)
		// - 개발자가 직접 형변환을 작성 해줘야하며, 하지 않을 경우 컴파일 에러 발생
		// - 범위가 큰 자료형 -> 범위가 작은 자료형
		// - 주의 : 큰 자료형에서 작은 자료형으로 변환하기 때문에 데이터 손실 발생할 수 있음.
		long lNumber = 10000000000L;
		int iNumber = (int)lNumber;	//8byte를 강제로 4byte로 변경
		System.out.println(iNumber);
	}

}
