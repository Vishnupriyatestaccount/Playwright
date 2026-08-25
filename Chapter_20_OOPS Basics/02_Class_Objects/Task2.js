class student{
    static batch="Playwright 2.x";
    name_student;
    age;
    phno;
    constructor(name_student, age, phno){
        this.name_student=name_student;
        this.age=age;
        this.phno=phno;
    }

    studentdetails()
    {
        console.log("Student Name: "+this.name_student);
        console.log("Student Age: "+this.age);
        console.log("Student Phone Number: "+this.phno);
        console.log("Student Batch: "+student.batch);
    }
}

student1=new student("Vishnu", 30, 1234567890);
student1.studentdetails();  
student2=new student("Ravi", 25, 9876543210);
student2.studentdetails();  
student3=new student("Ramesh", 28, 9876543210);
student3.studentdetails();