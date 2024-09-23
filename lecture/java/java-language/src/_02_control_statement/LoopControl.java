package _02_control_statement;

import java.util.ArrayList;
import java.util.List;

//반복분
public class LoopControl {
  public static void main(String[] args) {
    //기본 for문
    for (int i = 1; i<=10; i++){
      System.out.print(i + " ");
    }
    System.out.println();

    //while문
    int i = 1;
    while (i<=10){
      System.out.print(i+ " ");
      i++;
    }
    System.out.println();

    //do-while문
    //저어도 한번은 수행되는 반복문
    //while문과 다르게 조건식이 뒤에 배치
    int j = 1;
    do {
      System.out.print(j + " ");
      j++;
    } while (j<=10);
    System.out.println();
    
    /////////////////////////////////////////////////
    //while vs do-while
    int k = 5;
    System.out.println("while문 시작");
    while (k<5){//맨 처음 반복부터 조거신 결과가 false이기 떄문에 루프 부분이 한번도 실해되지 못합
      System.out.println("k = " + k);
      k++;
    }
    System.out.println("while문 끝");

    System.out.println("do-while문 시작");
    do {
      System.out.println("k = "+k);
      k++;
    }while (k<5);
    System.out.println("do-while문 끝");
    //루프 부분이 최소한 한번은 실행되어야 할 때 사용

    //////////////////////////////////////////////////////
    //for-each문 (향상된 for 문)
    //간결성: 일반 for 문 보다 간결
    //오류 발생 가능성 낮음: 인덱스를 사용하지 않으니 인덱스 관련 오류를 줄일 수 있음
    //순회 전용: 순차적으로 접근할 때만 사용 가능
    //역방향 순회 불가능: 항상 처음부터 끝까지 순회
    //=> 모든 요소에 대해서 동일한 작업을 할 떄 유리, 인덱스가 필요하거나 특정 조건에서 순회를 주단해야 한다면 일반 for문이나 while 문이 더 적합함

    //case1. 배열에 대해서 for-each 문
    String[] array = {"a", "b", "c"};
    for(String a: array){
      System.out.println("원소 ="+a);
    }
    System.out.println();

    //참고. 일반  for 문으로 배열 순회
    //for-each문 보다 명시적
    //인덱스(원소의 위치)를 사용할 수 있음
    //코드가 길어짐
    for(int x=0; x< array.length; x++){
      System.out.println("원소= "+x);
    }

    //case2. List 에 대해 for-each
    List<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("C");
    list.add("D");
    for(String l : list){
      System.out.println("l = "+l);
    }


  }
}
