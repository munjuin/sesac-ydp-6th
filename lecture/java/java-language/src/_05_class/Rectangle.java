package _05_class;

import java.util.Scanner;

class Rectangle {
  private int width;
  private int height;

  public Rectangle(int width, int height) {
    this.width = width;
    this.height = height;
  }

  public int area() {
    return width * height;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("사각형의 가로(width)와 세로(height) 길이를 입력하세요:");
    int width = scanner.nextInt();
    int height = scanner.nextInt();

    Rectangle rectangle = new Rectangle(width, height);

    System.out.println("사각형의 넓이: " + rectangle.area());
  }
}
