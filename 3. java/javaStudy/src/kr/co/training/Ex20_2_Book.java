package kr.co.training;

public class Ex20_2_Book {

	
//	책 빌리는 메서드 (borrowBook)
//	 - 매개변수 1은 자료형 : Ex20_2_BookInfo
//	 - 매개변수 2는 자료형 : int
//		> 빌릴 책의 수
//	 - Ex20_2_BookInfo의 bookCount 값을 빌릴 책의 수 만큼 뺍니다.
//	 - "책을 0권 빌렸습니다." 출력
	public void borrowBook(Ex20_2_BookInfo bookInfo, int borrowCount) {
		int currentBook = bookInfo.getBookCount(); // 현재 책의 수
		
		bookInfo.setBookCount(currentBook - borrowCount);
		
		System.out.println("책을 " +
		bookInfo.getBookCount() + "권 남았습니다.");
		
		
		
		
		
	}
	public void showBookCount(Ex20_2_BookInfo bookInfo) {
		System.out.printf("현재 도서관에는 %d권의 책이 있습니다.\n", bookInfo.getBookCount());
	}
	
//	 책을 반납하는 메서드 (return Book)
//	 - 매개변수 1은 자료형 : Ex20_2_BookInfo
//	 - 매개변수 2는 자료형 : int
//		> 반납할 책의 수
//	 - Ex_20_2 BookInfo의 bookCount 값을 반납할 책의 수 만큼 더합니다.
//	 - "책을 0권 반납했습니다." 출력
	public void return_book(Ex20_2_BookInfo bookInfo, int returnCount) {
		int currentCount = bookInfo.getBookCount();
		bookInfo.setBookCount(currentCount + returnCount);
		System.out.println("책이" +bookInfo.getBookCount() + " 권 남았습니다.");
	}
	
//	bookInfo.bookCount = bookInfo.bookCount + returnCount;
//	System.out.printf("책을 %d권 반납했습니다.\n", returnCount);
//	 현재 도서관에 남은 책의 수를 출력하는 메서드 (showBookCount)
//	  - 매개변수 1은 자료형 : Ex20_2_BookInfo
//	  - 현재 남은 책의 수는 Ex20_2_BookInfo의 bookCount 입니다.
//	  - "현재 도서관에는 0권의 책이 있습니다." 출력
}