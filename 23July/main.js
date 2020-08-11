//OBJECT & ARRAY

// var student = {
//     name: 'Nilam',
//     rollNo: 1,
//     gender: "Female",
    //subjects: [1,2,3, "MAths", true, {
    // subjects: ["C++","JAVA","JS"]
        //name: 'X'
    //}, [] ] // Array - Values (NOT key Val pairs)
//};  //  empty Object - many properties - KEY: VALUE pairs

// var names = ['Jayesh', 'Nilam']

// var x;
// console.log(student.subjects.length); // 3

// console.log(names.length);  //2


// names[3] = 'Minni';

//console.log(names);
// console.log(names[2]); // Undefined
// Jayesh, Nilam, Undefined , Minni

//console.log(names.length); // 4 

// console.log(student);
// console.log(student.name); // Nilam
//console.log(student[name]);
// console.log(student.subjects); // C++ , JAVA, JS
// console.log(student.subjects[2]); // JS
// console.log(names[2]);  // Undefined
// console.log(x); // undefined

var time = "12 CST";

var x = {
    9:'abc',
    instructor: "Jayesh",
    students:["A","N","R","H"],
    subjects:{
        sub1: "HTML",
        sub2: "CSS",
        sub3: ["JS",'REACT'],
        sub4: "Version control"
    },
    time: time,
    timeZone: "CST"

}
console.log(x.instructor);  //Jayesh
console.log(x["instructor"]); // Jayesh
console.log(x[9]);

//x.subjects.sub3[2] = "Redux" ; // BAD WAY TO ADD


// console.log(x.students[3]);  // H
// console.log(x.time); // 12 CST
// console.log(x.subjects.sub3[1]); // REACT

x.subjects.sub3.push("Redux"); // ADD Value to END
console.log(x.subjects.sub3);

x.subjects.sub3.unshift("GIT"); // ADD Value at the Beginning
console.log(x.subjects.sub3);

x.subjects.sub3.pop(); // REMOVE 1 Element from the END
console.log(x.subjects.sub3);

x.subjects.sub3.shift(); // REMOVE 1 Element from the Beginning
console.log(x.subjects.sub3);
