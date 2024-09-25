package _02_control_statement;

import java.util.Scanner;

public class LoopControlPractice {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("숫자를 입력하세요");

    int n = scanner.nextInt();

    for (int i = 1; i <= n; i++) {
      System.out.print(i + " ");
    }

    scanner.close();

  }
}
