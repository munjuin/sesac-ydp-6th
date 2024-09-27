package _05_class;
import java.util.ArrayList;
import java.util.Scanner;

// Rectangle 클래스 정의
public class Rectangle {
  // 필드: 가로(width)와 세로(height) -> 접근제어자 private
  private int width;
  private int height;

  // 생성자: 가로(width) 값만 매개변수로 받고, height는 나중에 설정
  public Rectangle(int width) {
    this.width = width;
  }

  // getter와 setter 생성
  public int getWidth() {
    return width;
  }

  public void setWidth(int width) {
    this.width = width;
  }

  public int getHeight() {
    return height;
  }

  public void setHeight(int height) {
    this.height = height;
  }

  // 면적을 계산하는 메소드
  public int area() {
    return width * height;
  }

  // Rectangle 정보를 출력하는 메소드
  public void printInfo() {
    System.out.println("가로: " + width + ", 세로: " + height + ", 면적: " + area());
  }

  // main 메소드
  public static void main(String[] args) {
    // ArrayList로 Rectangle 객체들을 저장
    ArrayList<Rectangle> rectList = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);

    while (true) {
      // 사용자로부터 가로와 세로 입력 받기
      System.out.println("사격형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
      int width = scanner.nextInt();
      int height = scanner.nextInt();

      // 가로와 세로가 둘 다 0이면 입력 종료
      if (width == 0 && height == 0) {
        break;
      }

      // Rectangle 객체 생성 후 height 값은 setter로 설정
      Rectangle rect = new Rectangle(width);
      rect.setHeight(height);

      // 생성된 Rectangle 객체를 ArrayList에 추가
      rectList.add(rect);
    }

    // 사용자가 입력한 모든 Rectangle 객체 정보 출력
    System.out.println("\n입력된 사각형 정보:");
    for (Rectangle rect : rectList) {
      rect.printInfo();
    }

    scanner.close();
  }
}
