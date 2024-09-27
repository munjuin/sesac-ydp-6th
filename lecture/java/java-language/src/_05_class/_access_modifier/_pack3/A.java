package _05_class._access_modifier._pack3;

public class A {
  public  int field1;
  int field2;
  private int field3;

  //생성자
  public  A(){
    //클래스 내부이므로 접근 제한자의 영향 받지 않음
    field1=1;
    field2=2;
    field3=3;

  }

  //public method
  public void method1(){

  }
  //default method
  void method2(){

  }
  //private method
  private void method3(){

  }

}
