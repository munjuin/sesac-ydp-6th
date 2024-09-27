package _05_class._inheritance;

class Cat extends Animal {

  public Cat(String name, int age) {
    super("고양이", name, age);
  }

  @Override
  public void makeSound() {
    System.out.println("야옹");
  }

  public void behavior() {
    System.out.println("꾹꾹이중");
  }
}