package _04_exception;

import java.util.Scanner;

public class ExceptionExPractice {
  public static void main(String[] args) {
    //1번
//    int[] arr = {1,2,3,4};
//    try{
//      for(int i=0; i<=5; i++){
//        System.out.println(arr[i]);
//      }
//    } catch (ArrayIndexOutOfBoundsException e){
//      System.out.println("인덱스가 범위를 벗어났습니다.");
////      System.out.println("인덱스가 범위를 벗어났습니다 >> "+ e.getMessage());
//    }

    //2번
      //배열의 크기를 입력받고, ex-> 4 값을 안받으면 [0,0,0,0] 그러면 배열의 값도 입력해 줘야 함

    //예외처리
    //평균을 구하는 경우 배열의 크기를 넘기는 경우
    //평균 계산 시 0으로 나누는 경우
    //배열의 요소를 입력하는 경우 배열의 크기를 넘기는 경우

    Scanner sc = null;

//    try {
      sc = new Scanner(System.in);
      System.out.println("배열의 크기를 입력하세요");
      int arrSizeInput = sc.nextInt();
      int[] arr = new int[arrSizeInput];

      System.out.println("배열의 요소를 입력하세요"+arr);
//      int arrInput = sc.nextInt();





//    }


  }
}
