package _01_basic_syntax;

public class Operator {
    public static void main(String[] args) {
        int x,y;
        float a,b;

        x=10;
        y=20;
        a=5.0f;
        b=10.0f;

        System.out.println("===x, y===");

        //산술연산자 숫자형 데이터에 대해서 산술 연산 가능
        System.out.println("x+y=" + (x+y));
        System.out.println("x-y=" + (x-y));
        System.out.println("x*y=" + (x*y));
        System.out.println("x/y=" + (x/y));
        System.out.println("x%y=" + (x%y));


        System.out.println("===a, b===");
        System.out.println("a+b=" + (a+b));
        System.out.println("a-b=" + (a-b));
        System.out.println("a*b=" + (a*b));
        System.out.println("a/b=" + (a/b));
        System.out.println("a%b=" + (a%b));

        //증가 감소 연산자
        System.out.println("===증감연산자===");
        System.out.println("x++:"+ x++ + ' ' + x);
        System.out.println("++x:"+ ++x);

        //산술적인 대입 연산자
        System.out.println("산술적인 대입연산자");
        System.out.println(x=10);
        System.out.println("x += 5 =" + (x += 5));
        System.out.println("x -= 5 =" + (x -= 5));
        System.out.println("x *= 5 =" + (x *= 5));
        System.out.println("x /= 5 =" + (x /= 5));
        System.out.println("x %= 5 =" + (x %= 5));

        //비교연산자: 연산 결과가 불리언
        System.out.println("비교연산자");
        System.out.println("a > b =" + (a>b));
        System.out.println("a >= b =" + (a>=b));
        System.out.println("a < b =" + (a<b));
        System.out.println("a <= b =" + (a<=b));
        System.out.println("a == b =" + (a==b));
        System.out.println("a != b =" + (a!=b));

        boolean j = true;
        boolean k = false;
        boolean l = true;
        System.out.println("논리연산자");
        System.out.println("j&&k = "+ (j&&k));
        System.out.println("j&&l = "+ (j&&l));
        System.out.println("j||k = "+ (j||k));
        System.out.println("j||l = "+ (j||l));
        System.out.println("!j = " + (!j));

        //삼항연산자
        System.out.println("삼항연산자");
        System.out.println("x>y?참일때:거짓일때"+(x>y?true:false));

        //연산자 우선순위
        //암묵적으로 연산자 우선순윙 ㅔ따라서 계산 명시적으로 연산 순서를 지정하고 싶다면 괄호로 묶어서 우선순위 지정 가능
    }
}
