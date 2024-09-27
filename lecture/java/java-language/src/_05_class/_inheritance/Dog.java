package _05_class._inheritance;

class Dog extends Animal {
  // 생성자
  public Dog(String name, int age) {
    super("강아지", name, age);
  }

  @Override
  public void makeSound() {
    System.out.println("멍멍");
  }

  public void fetch() {
    System.out.println("공가져와");
  }
}
