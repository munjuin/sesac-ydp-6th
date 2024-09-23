package _02_control_statement;

public class ConditionalStatementPractice {
  public static void main(String[] args) {
    //if-else문
    int number = 10;
    if(number%2==0){
      System.out.println("짝수");
    } else {
      System.out.println("홀수");
    }
    ////////////////////////////////////////////////
    //String 타입에 대해 조건문 사용시 주의 사항
//    System.out.print("이름을 입력해주세요");
//    Scanner sc = new Scanner(System.in);
//    String name = sc.nextLine();
//    System.out.println("name = " + name);

    //BAD(== 비교연산자 사용)
//    if(name == "김새싹"){
//      System.out.println("환영합니다");
//    }else {
//      System.out.println("이름을 다시 확인해주세요");
//    }

    //GOOD(.equals() 메서드 사용)
//    if(name.equals("김새싹")){
//      System.out.println("환영합니다");
//    }else {
//      System.out.println("이름을 다시 확인해주세요");
//    }

    //WHY?
    // == 연산자는 두 객체의 참조를 비교(동일한 메모리 위치를 가르키는지 검사)
    //.equals() 메서드는 두 객체의 내용이 동일한지를 비교

    // 문자 리터럴의 경우 Java 에서 특별한 취급 동일한 문자열 리터럴이 사용된 경우 Java 컴파일러는 문자열 풀(string pool) 이라는 공유된 메모리 영역에 해당 문자열 저장
    //즉 str1과 str2는 같은 문자열을 가르키고 있으므로 같은 참조를 가르킴 -> 따라서 == 연산자로 비교해도 true
    String str1 = "hello";
    String str2 = "hello";

    if(str1 == str2){
      System.out.println("같은 참조를 가르킴");
    }else {
      System.out.println("다른 참조를 가르킴");
    }

    if(str1.equals(str2)){
      System.out.println("같은 내용을 가르킴");
    }else {
      System.out.println("다른 내용을 가르킴");
    }

    //문자열 동적할당의 경우 new String(...) 을 사용해 새로운 문자열 객체를 생성하면 서로 다른 객체를 가르킹


    //if-else if 문
    //top-down 방식으로 처음 조건신이 참으로 평가되면 해당식 수정한 다음에 if 적을 빠져나감
    if(number % 3 == 0){
      System.out.println("3의 배수");
    }else if (number % 5 == 0){
      System.out.println("5의배수");
    }else if(number % 2 == 0){
      System.out.println("2의 배수");
    }else {
      System.out.println("3의 배수도 5의 배수도 2의 배수도 아님");
    }

    //switch - case 문
    //각 case 문의 break 문은 선택사항으로 break 문 생략시 바로 밑의 case 문으로 넘어감(여러 case 문 하나의 시행문 지정 가능)
    String dayOfWeek;
    int day = 1 ;
    switch (day){
      case 1:
        dayOfWeek = "일";
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        dayOfWeek = "월~금";
        break;
      case 7:
        dayOfWeek = "토";
        break;
      default:
        dayOfWeek = "잘못된입력입니다";
        break;
    }
    System.out.println(dayOfWeek);
  }
}
