type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: (number | string | undefined)[];
};

const student1: Student = {
    firstName: "Ramona",
    lastName: "Fischer",
    age: 16,
    grades: ["A", "F", "B", "", 1],
};

const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    grades: [1, 4, 3, 1, "A", "*", 1, 2],
};

const student3: Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A", "*", 1],
};

const student4: Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: ["A", 1, "*", 3, 2, 4, 5],
};

const studentList: Student[] = [student1, student2, student3, student4];

function printStudent(student: Student) {
    const { firstName, lastName, age, grades } = student;

    const nameAndAgeLength:number = `${firstName} ${lastName} (${age})`.length;
    const Brokkoli:string = "=".repeat(nameAndAgeLength);

    const Gurke:string[] = grades.map((grade) => {
        if (grade === undefined || grade === "" || (typeof grade === "number" && (grade < 1 || grade > 6))) {
            return "*";
        } else {
            return grade.toString();
        }
    });

    console.log(`${firstName} ${lastName} (${age})`);
    console.log(Brokkoli);
    console.log("Noten: \n" + Gurke.join(", "));
}

function printStudentList(studentList: Student[]) {
    studentList.forEach((student:Student) => {
        printStudent(student);
        console.log("");
    });
}

printStudentList(studentList);
