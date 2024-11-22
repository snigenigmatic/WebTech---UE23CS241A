// const Student1 = {Name:"Kaustubh", Age:19, SRN:"PES1UG23CS154", Branch:"CSE"};

// console.log(Student1.Name+" is "+Student1.Age+" years old and is from "+Student1.Branch+" branch. His SRN is "+Student1.SRN);

// const student2: { Name: string, Age: number, SRN: string, Branch: string } = {
//   Name: "Rohan",
//   Age: 20,
//   SRN: "PES1UG23CS155",
//   Branch: "CSE"
// };

// console.log(student2.Name + " is " + student2.Age + " years old and is from " + student2.Branch + " branch. His SRN is " + student2.SRN);

// export class student {
//     constructor(
//         Name: string,
//         Age: number,
//         SRN: string,
//         Branch: string
//     ) {
//         this.Name = Name;
//         this.Age = Age;
//         this.SRN = SRN;
//         this.Branch = Branch;
//     }
//     Name: string;
//     Age: number;
//     SRN: string;
//     Branch: string;
// }

// const student3 = new student("Rahul", 21, "PES1UG23CS156", "CSE");
// console.log(student3.Name + " is " + student3.Age + " years old and is from " + student3.Branch + " branch. His SRN is " + student3.SRN);

type PersonType = {
    firstName: string;
    age: number;
    eyeColor: string;
    fullName: () => void;
};

function Person(this: PersonType, first: string, age: number, eye: string) {
    this.firstName = first;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        console.log("The Name is ", this.firstName, ", James " + this.firstName);
    };
}

const bond = new (Person as any)("Bond", 25, "blue");
bond.fullName();
