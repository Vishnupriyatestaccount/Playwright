class student{
 static name="Playwright 2.x";
    static mentor="Vishnu";

    constructor(name_student, age, phno){
        this.name_student=name_student;
        this.age=age;
        this.phno=phno;
    }
}
   
    const s1=new student("Vishnu", 30, 1234567890);
    const s2=new student("Ravi", 25, 9876543210);

    console.log(student.name);
    console.log(student.mentor);
    console.log(s1.name_student);
    console.log(s1.age);

