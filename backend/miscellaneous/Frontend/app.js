/*
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}

let p1 = new Person("Daiyan",23);
let p2 = new Person("Raju",24);
*/

class Person{
    constructor(name,age){
        console.log(`parent class constructor called`);
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}