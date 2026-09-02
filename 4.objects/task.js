function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Софья", "женский", 25 );
let student2 = new Student("Михаил", "мужской", 28);
let student3 = new Student("Алиса", "женский", 30);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(!("marks" in this) || this.marks.length === 0 ) {
    return 0;
  }
  
  let marksSum = this.marks.reduce((acc, mark) => acc + mark, 0);
  let marksAverage = marksSum / this.marks.length;
  return marksAverage;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  
}
