class House {
  constructor(year, name, window){
    this.year = year;
    this.name = name;
    this.window = window;
  }
  getAge(){
    console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요`);
    }
    getWindow(){
    console.log(`${this.name}의 창문은 ${2024 - this.window}개 입니다`);

  }
}

const house1 = new House(1990, '롯데', 1);//클래스를 이용해서 인스턴스를 생성해서 constructor에 선언된 매개변수 대로 값을 지정해야 함

//상속

class apt extends House {
  constructor (year, name, window, floor, maker){
    super(year, name, window);
    this.floor = floor;
    this.maker = maker;
  }
  getAptInfo(){
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
  }
}

const apt1 = new apt(2024, '힐스테이트', 3, 48, '영림');
console.log(apt1);

console.log(apt1.getAptInfo());
