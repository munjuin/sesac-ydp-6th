package _05_class._inheritance;

class Animal {
  private String kind;
  private String name;
  private int age;


  public Animal(String kind, String name, int age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
  }

  public void makeSound() {
    System.out.println("동물은 소리를 낸다");
  }

//getter
  public String getKind() {
    return kind;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }
}
