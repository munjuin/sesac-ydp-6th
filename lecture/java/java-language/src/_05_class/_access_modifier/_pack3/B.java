package _05_class._access_modifier._pack3;

public class B {
  public void method(){
    A a = new A();

    a.field1 = 11;
    a.field2 = 22;
//    a.field3 = 33;//private fiedl 이므로 컴파일에러

    //메소드 호출
    a.method1();
    a.method2();
//    a.method3();//private method 이므로 컴파일에러
  }
}
