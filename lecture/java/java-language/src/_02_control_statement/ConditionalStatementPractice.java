package _02_control_statement;

import java.util.Scanner;

public class ConditionalStatementPractice {
  public static void main(String[] args) {
    //일반 for문
    //조건문 1
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("나이를 입력하세요");
//    int age = scanner.nextInt();
//    scanner.close();
//    if(age>20){
//      System.out.println("성인");
//    } else if (age >= 17) {
//      System.out.println("고딩");
//    } else if (age >= 14) {
//      System.out.println("중딩");
//    } else if (age >= 8){
//      System.out.println("초딩");
//    } else if (age >= 1) {
//      System.out.println("유아");
//    }else {
//      System.out.println("잘못입력함");
//    }

    //조건문 2
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("이름을 입력하세요");
//    String name = scanner.nextLine();
//    scanner.close();
//    if(name.equals("홍길동")){
//      System.out.println("남자");
//    } else if(name.equals("성춘향")) {
//      System.out.println("여자");
//    }else {
//      System.out.println("잘못입력함");
//    }

    //조건문 3
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("세개의 정수를 입력하세요");
//
//    System.out.print("첫 번째 정수를 입력하세요: ");
//    int num1 = scanner.nextInt();
//
//    System.out.print("두 번째 정수를 입력하세요: ");
//    int num2 = scanner.nextInt();
//
//    System.out.print("세 번째 정수를 입력하세요: ");
//    int num3 = scanner.nextInt();
//
//    int max = Math.max(num1, Math.max(num2, num3));
//
//    int min = Math.min(num1, Math.min(num2, num3));
//
//    int sum = num1 + num2 + num3;
//
//    double average = sum / 3;
//
//    System.out.println("최대값: " + max);
//    System.out.println("최소값: " + min);
//    System.out.println("합계: " + sum);
//    System.out.println("평균: " + average);
//
//    scanner.close();

    //조건문 3 if문
    Scanner scanner = new Scanner(System.in);
    System.out.println("세개의 정수를 입력하세요");

    System.out.print("첫 번째 정수를 입력하세요: ");
    int num1 = scanner.nextInt();

    System.out.print("두 번째 정수를 입력하세요: ");
    int num2 = scanner.nextInt();

    System.out.print("세 번째 정수를 입력하세요: ");
    int num3 = scanner.nextInt();

    int max = num1;
    if (num2 > max) {
      max = num2;
    }
    if (num3 > max) {
      max = num3;
    }

    int min = num1;
    if (num2 < min) {
      min = num2;
    }
    if (num3 < min) {
      min = num3;
    }

    int sum = num1 + num2 + num3;
    double average = sum / 3.0;

    System.out.println("최대값: " + max);
    System.out.println("최소값: " + min);
    System.out.println("합계: " + sum);
    System.out.println("평균: " + average);

    scanner.close();


    //switch case문
    //조건문 1
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("나이를 입력하세요");
//    int age = scanner.nextInt();
//    scanner.close();
//
//    switch (age / 10) { // 나이를 10으로 나누어서 구간을 설정
//      case 2: // 20대
//        if (age > 20) {
//          System.out.println("성인");
//        } else {
//          System.out.println("고딩");
//        }
//        break;
//      case 1: // 10대
//        if (age >= 17) {
//          System.out.println("고딩");
//        } else if (age >= 14) {
//          System.out.println("중딩");
//        } else {
//          System.out.println("초딩");
//        }
//        break;
//      case 0: // 0-9세
//        if (age >= 8) {
//          System.out.println("초딩");
//        } else if (age >= 1) {
//          System.out.println("유아");
//        } else {
//          System.out.println("잘못입력함");
//        }
//        break;
//      default:
//        System.out.println("성인");
//        break;
//    }

    //조건문 2
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("이름을 입력하세요");
//    String name = scanner.nextLine();
//    scanner.close();
//
//    switch (name) {
//      case "홍길동":
//        System.out.println("남자");
//        break;
//      case "성춘향":
//        System.out.println("여자");
//        break;
//      default:
//        System.out.println("잘못입력함");
//        break;
//    }
  }
}
