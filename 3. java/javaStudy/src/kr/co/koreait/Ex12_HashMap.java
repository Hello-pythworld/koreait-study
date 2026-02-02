package kr.co.koreait;

import java.util.HashMap;

public class Ex12_HashMap {

	public static void main(String[] args) {
//			HashMap
//			 - Key-Value 형태를 가진 자료구조
//			 - 순서 보장 X
//			 - 키는 중복 허용 X, 값은 중복 허용 O
		HashMap<String, Integer> map = new HashMap<>();
		map.put("키1", 10);
		map.put("키2", 20);
		map.put("키3", 30);
		map.put("키1", 40);
		
		
		map.remove("키2");
		
		System.out.println(map);
		
		
		System.out.println(map.get("키1"));
		
		System.out.println(map.keySet()); // 키를 배열 형태로 반환
		for(String key : map.keySet()) {
			System.out.println("Key : " + key + ", Value : " + map.get(key));
		}
		
		System.out.println(map.values()); // 값을 배열 형태로 반환
		
		for(Integer value : map.values()) {
			System.out.println(value);
		}
	}

}
