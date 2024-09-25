package _03_array;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayExPractice {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("5개의 정수를 입력하세요");
    int num1 = scanner.nextInt();
    int num2 = scanner.nextInt();
    int num3 = scanner.nextInt();
    int num4 = scanner.nextInt();
    int num5 = scanner.nextInt();

    int[] Arr = {num1, num2, num3, num4, num5};
    int sum = 0;
    for(int num : Arr){
      sum += num;
    }
    System.out.println(sum);

    int avg = sum / Arr.length;

    System.out.println("평균은 "+ (double)avg);
  }
}
