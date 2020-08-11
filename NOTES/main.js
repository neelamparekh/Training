// 15-JULY-2020


// HTML - Hyper Txt Markup Language
//     *Basic Building Block of Web
//     * There's no Error Handling

//     *HTML (Body)
//     *CSS (Clothing - Human)
//     *JS (Walks, Eats ... action..)


//     *Version Control  (GIT)
//     *React
//     *Redux

//16-JULY-2020

// <!--Lists-->
//     <!--
//         1. Ordered List
//         2. Unordered List
//     -->
//     <!--

    
//     <ol>
//         <li> Home</li>
//         <li> Dashboard</li>
//         <li> Contact</li>
//     </ol>
// -->


//21-JULY-202 & 22-JULY-2020

// var - Is a keyword - used for? - It is used for init variables - holds a value

// let and const = var

// var a = 10; // number; // ES5 - Not suggested to use anymore
// var b = 'Nilam' // String
// var c = true; // Boolean

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// var d = {}; // Object
// var e = []; // Array




// var a; // DEFAULT VALUE = Undefined
// console.log(a);

// var b = null;
// b = 10;
// b = 'Nilam';
// console.log(b); // Nilam - gets printed

// var b = 123.456; // number // typeof

// var s = "Nilam";
// var t = "D'cruz"; // " " is a very good practice

// variable can not start with special characters - it can be _kjrf87

// var a = 10;
// var b = 20;
// var result = a+b; // a-b, a*b, a/b, a%b

// console.log(a+b);
// console.log(result);

// ++ Inc --> 2 types --> Post Inc, Pre Inc
// -- Dec --> 2 types --> Post Dec, Pre Dec


//var a = 10;
// a++; // Post Inc
// ++a; // Pre Inc
//console.log(a);

//console.log(a++); //10
//console.log(a); //11

//console.log(++a); //11
//console.log(a); //11

// console.log(a--); // 10
// console.log(a); // 9

// console.log(--a); //9
// console.log(a); //9


//CONDITION

//if (false) { //Sun rises in West?
  //  console.log("YES");// YES
//} else {
  // console.log("NO"); // NO
//}

//var a = 10; // assignment operator
//var b = 20;  // '10'

// >
// <
// ==
// ===
// >=
//<=

// !== --> It will compare only values
// !=== --> It will check for the type

// == -> It will compare only values
//=== -> It will check for the type strictly

//if(a>b) { // false // (a<b), (a==b), (a===b), (a!=b), (a>=b)
 //   console.log("YES"); //YES
//} else {
  //  console.log("NO"); // NO
//}


// LOGICAL OPERATORS
// && - Logical AND
// || - Logical OR
// ! - NOT

// var a = 10; // assignment operator
// var b = '10';

// var c = 90;
// var d = 80;

// var e = 88;
// var f = 50;

// // if (a=b && (c>d && e>f)) {
//   if (a>b) {
//   console.log("YES"); 
// } else if(a==b){
//   console.log("a and b are equal");
// } 
// else {
//   console.log("NO");
// }

// var a = 10; // assignment operator
// var b = '10';

// var c = 90;
// var d = 80;

// var e = 88;
// var f = 50;
//   if (!(a==b)) { // a==b -> !True -> NOT TRUE = FALSE
//   console.log("YES"); // YES
// } else if(!(a===b)){ // NOT FALSE -> TRUE
//   console.log("a and b are equal"); // a and b are equal
// } 
// else {
//   console.log("NO"); // NO
// }

//-->SWITCH<--

// var a = 1;
// switch (a) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   default:
//       console.log("IDK!");
//     break;
// }

//-> FOR LOOP<- // ENTRY CONTROLLED
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//--> WHILE<-

// var i=0;
//  while(i<5) { //ENTRY CONTROLLED LOOP
//    console.log(i);
//    i++;  
//  } //CAREFULL -> YOU'LL LEAD TO INFINITE LOOP IF you dont use i++;

 //--> DO WHILE <--
 //var i = 6;
 // THE LOOP WILL RUN AT LEAST ONCE
//  do { // EXIT CONTROLLED LOOP
//    console.log(i);
//    i++;
//  } while (i<5); //CAREFULL -> YOU'LL LEAD TO INFINITE LOOP IF you dont use i++;

//PRINT ODD NUMBERS 
//for(var i=1; i<=10; i++)
// { 
//   if((i%2)==1)  // if((i%2)==0) -> Print Even Numbers
//   {
  //console.log(i);
// }
//}
 
// ASSIGNMENT -1 -- Print TOO , FOO, TOOFOO

// for (let i = 1; i<= 100 ; i++) 
//  {
//    if (i % 2 == 0 && i%5 == 0) {
//        console.log("TooFoo");
//    }
//    else if (i%2==0){
//         console.log("Too");
//     }
//     else if (i%5 == 0) {
//         console.log("Foo");
//     }
//     else {
//       console.log(i);
//     }
//  }

 
// Adding Number 1 to 20 // print 120

//  var RESULT = 0;
//  for (let a = 1; a <=20; a++){
//   RESULT = RESULT + a;
// }
//  console.log("RESULT = " + RESULT);





//23-JULY-2020

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

// var time = "12 CST";

// var x = {
//     9:'abc',
//     instructor: "Jayesh",
//     students:["A","N","R","H"],
//     subjects:{
//         sub1: "HTML",
//         sub2: "CSS",
//         sub3: ["JS",'REACT'],
//         sub4: "Version control"
//     },
//     time: time,
//     timeZone: "CST"

// }
// console.log(x.instructor);  //Jayesh
// console.log(x["instructor"]); // Jayesh
// console.log(x[9]);

// //x.subjects.sub3[2] = "Redux" ; // BAD WAY TO ADD


// // console.log(x.students[3]);  // H
// // console.log(x.time); // 12 CST
// // console.log(x.subjects.sub3[1]); // REACT

// x.subjects.sub3.push("Redux"); // ADD Value to END "PUSH"
// console.log(x.subjects.sub3);

// x.subjects.sub3.unshift("GIT"); // ADD Value at the Beginning "UNSHIFT"
// console.log(x.subjects.sub3);

// x.subjects.sub3.pop(); // REMOVE 1 Element from the END "POP"
// console.log(x.subjects.sub3);

// x.subjects.sub3.shift(); // REMOVE 1 Element from the Beginning "SHIFT"
// console.log(x.subjects.sub3);


//ASSIGNMENT  --PRINT EVEN, ODD, TENS' ARRAYS

// var EVEN =[];
// var ODD =[];
// var TENS=[];

// for(var i = 1; i<=100; i++)
// {
// if (i%2==0 && i%10!=0){
//     EVEN.push(i); 
// }
// else if (i%2==1)
// {
//     ODD.push(i); 
// }
// else if (i%10==0){
//     TENS.push(i);
// }
// }
// console.log(EVEN);
// console.log(ODD);
// console.log(TENS);


// 24-JULY-2020

// HTML CODE -------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Functions</title>
//     <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> <!--ajax from the Jquery Library-->
// </head>
// <body>
//     <h2>Welcome</h2>
//     <label>UserName</label>
//     <input type="text" id="username"/> <br/> <br/>
//     <button onclick="getData()">GET DATA</button> <!--Have unique ID for each element <h1>,<label>, <input>,<button>, etc..-->
//     <script src="main.js"></script>
//     </body>
// </html>

// .JS CODE -------------//

//console.log(document);// document hold the complete HTML document
//console.log(document.getElementById('username').value); 

//var userName = document.getElementById('username').value;

// $ - JQuery Object/Function
// ajax() - is JQuery function call

//Function
//a , b are parameters
// function add(a,b) { // Function Declaration
//     //console.log(1+2);
//     return a+b; // Functions ALWAYS returns something
// }

// var result = add(2,3); // Function call - Function gets executed if only function gets returned
// // you can reuse functions as many time as needed
// // add();
// // add();
// console.log(result);

// var student = {
//     marks:function(a,z) { // ()
//         console.log(a+z); // ("marks!")
//     }
// }
// student.marks(1,2); // ()



//Make an API Call

// function getData(){ 
//     var userName = document.getElementById('username').value;

//     // $ - JQuery Object/Function
//     $.ajax({
//         url: 'http://api.github.com/users/' + userName,
//         success: function(data){
//             console.log(data);
//         },
//         error: function(e) {
//             console.log(e);
//         }
//     }) // $ = student && ajax = marks // Function call

// }


//27-JULY-2020

// DISPLAY WEATHER DATA Using API CALL //-----ASSIGNMENT-----------
//.HTML FILE -------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>API WEATHER</title>
// <link rel="stylesheet" href="/ASSIGNMENTS/CSS/indexWeather.css">

//     <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
// </head>
// <body background="/ASSIGNMENTS/IMAGES/weatherimg.jpg">

//     <h2>Weather Details</h2>
//     <label>City Name</label> <br>
//     <input type="text" id="city"/> <br/><br/>
//     <button onclick="getData()">Display Weather Data</button> <br/><br/>
    

//     <table style="border: 1px solid black;">
//         <tr>
//             <th>CITY</th>
//             <th>HUMIDITY</th>
//             <th>WEATHER</th>
//             <th>TEMPERATURE</th>
           
//         </tr>

//         <tr>
//             <td id="displayCity"></td>
//             <td id="displayHumidity"></td>
//             <td id="displayWeather"></td>
//             <td id="displayTemp"></td>

//         </tr>
//     </table>

//     <script src="/ASSIGNMENTS/JS/mainWeather.js"></script>
// </body>
// </html>


// .JS FILE=========

// function getData(){
//     var City = document.getElementById('city').value;
    
//     $.ajax({
//         url: 'http://api.openweathermap.org/data/2.5/weather?q=' + City + '&appid=4e8fe55b900263c5f83603ed631e15ad',

//         success: function(data){
//             console.log(data);


//             document.getElementById('displayCity').innerHTML=data.name
//             document.getElementById('displayHumidity').innerHTML = data.main.humidity;
//             document.getElementById('displayWeather').innerHTML = data.weather[0].main;
//             document.getElementById('displayTemp').innerHTML = data.main.temp;
            
//         },
        
//         error: function(e){
//             console.log(e);
//         }
            
//     })
// }




//28-JULY-2020 


//JSON - Javascript Object Notation // xml
//-- This is a very light weight object : KEY Value Pairs.

//JSON Lint - This Validates the JSON Code :
//e.g. ==  { "9" : "abc", "instructor": "Jayesh"...} 

//Everything in jS is an Object

//JSON. Stringify(data) --> It will convert Object to String


    // function getData(){ 
    //     var userName = document.getElementById('username').value;
    
    //     console.log(document.getElementById('displayURL'));
        
    //     $.ajax({
    //         url: 'http://api.github.com/users/' + userName,
    //         success: function(data){
    //             console.log(data);
    
    //             document.getElementById('displayName').innerHTML=data.name;
    //             console.log(document.getElementById('displayName')); // goes to innerHTML
    //             document.getElementById('displayURL').innerHTML=data.url;
    //         },
    //         error: function(e) {
    //             console.log(e);
    //         }
    //     }) 
    
    // }

    //JSON.stringify == Converts Object to String
    //JSON.parse == Converts String to Object

    // var a = {
    //     name: "A"
    // }
    // document.getElementById("result").innerText = a;

    // console.log(a); // [object Object]

    // var a = {
    //     name: "A"
    // }

    // document.getElementById("result").innerText=JSON.stringify(a); // {"name":"A"} in HTML
    // console.log(a); // {name:A}
    // console.log(typeof(a)); //object
    // console.log(JSON.stringify(a)); // {"name":"A"} in Console // Its String
    // //console.log(typeof(JSON.parse(a)));

    // var b= JSON.stringify(a); // String
    // console.log(typeof(JSON.parse(b))); // Converted into Object 



    // DOM - Document Object Modal = It only accepts Strings & does not understand Object
    // For Paragraph object its a innerHTML property
    //<p id="result"></p>

//////////////////////////////////////////////////////////////////////////////

//     function getData(){ 
//     var userName = document.getElementById('username').value;

//     console.log(document.getElementById('displayURL'));
    
//     $.ajax({
//         url: 'http://api.github.com/users/' + userName,
//         success: function(data){
//             console.log(data);

//             document.getElementById('displayName').innerHTML=data.name;
//             document.getElementById('displayURL').innerHTML=data.url;
//         },
//         error: function(e) {
//             console.log(e);
//         }
//     }) 

// }
///////////////////////////////////////////////////////////////////////////////


//ASSIGNMENT TO DISPLAY REPOSITORY FROM GITHUB using USERNAME & INDEX ARRAY

// function getRepoData(){ 
//         var userName = document.getElementById('username').value;
//         var index = document.getElementById("indexnumber").value;
        
//         $.ajax({
//             url: `http://api.github.com/users/${userName}/repos`,

//             success: function(data){

//                 var repo = JSON.stringify(data[index]);

//                 document.getElementById('indexnumber').innerHTML=data[index]; 

//                 document.getElementById('profile').innerHTML=repo; // display in HTML
//             },
//             error: function(e) {
//                 console.log(e);
//             }
//         }) 
    
//     }


// 29-JULY-2020

//Var - Keyword [let, const]
//let
//const

// VAR [Functional Scope] & LET [Block scope]

// {} -This is called a BLOCK

// {
//     var a = 20;
//     console.log(a); //20
// } //block
// {
//     let b = 30; // "let can only live within a Block"
//     console.log(b);//30
// }

// console.log(a);//20
// console.log(b);//Error // let Lives in a Block 

    //If you declare a Var & let in a Function then;

    // function display(){

    //     var a = 20;
    //     console.log(a);//20
    // } //block
    // {
    //     let b = 30;
    //     console.log(b);//30
    // }
    // display(); 


    //HOISTING = The variables which are declared as var are pushed to the top 
    //              of the scope before execution.


    // console.log(a); // Undefined
    // console.log(b); // Error: Can't Access
    // var a = 10;
    // let b = 20;

    //==============When COMPILED CODE==========

    // var a; // undefined 
    //  console.log(a); // Undefined
    //  console.log(b); // Error

    //  a=10; // var a is pushed to the top
    //  let b=20; // variables can be accessed only after declaration

//-----Block Scope in Real Time 
// Loops, switch, if/else, do/while

// var a =10;
// {
//     let a =9;
// }
// console.log(a); // 10 

//-----Functional scope is with Functions

// == A. CONST

// const a =10;
// console.log(a); //10

// a=0;
// console.log(a); // Error because we can not reassign variables when its CONST throughout complete cycle

// e.g. pi= has constant value

// == B. CONST

// const a = {
//     name: "Jayesh"
// }
//  console.log(a); // Jayesh

//  a.name="Nilam";
// console.log(a); //Nilam // Properties inside an Object can be changed. 
//====================
// const student={
//     name:"Jayesh"
// }
// console.log(student); //Jayesh
// student.name="Harsh";
// console.log(student); // Harsh

// student.rollNo = 2;
// console.log(student);// Harsh, 2 

// You can add a property, modify a property but you can not change complete Object
//                      to a string , number or an array with a CONST.
//==========================================================

// LITERALS
//+  = to concatinate two strings
//`` = concatinate  

// var name="Jayesh";
// console.log(name + ' Is an Instructor'); // Jayesh is an Instructor

// console.log(`${name} is an Instructor!!!`); // Jayesh is an Instructor!!!

//forEach()

// const food = ['Maggie', 'Oats','Popcorn'];

// ////food.forEach();  
// ////food.forEach(function);
// ////food.forEach(function (params) {  })// Anonymous function where name is not given
// let result = ``;
// food.forEach(function (item) { // for(let i=0; i< food.length; i++){ food[i] => 0 1 2 3}
//     result +=`<li>${item}</li>`
    
// });
//     document.getElementById('food_items').innerHTML=result;



//ASSIGNMENT - Display details including ID, NAMES, URL, CREATED AT, PUSHED AT, UPDATED AT
//             in a table. 

// This will Append the Results

// function getData(){
//     var userName= document.getElementById("username").value;
//     $.ajax({
//         url: `http://api.github.com/users/${userName}/repos`,

//         success: function(data){
//             let result= document.getElementById("tab").innerHTML;//String // let because the data is manipulated everytime we call a function
//         data.forEach(function(dataitem){

//                 result +=`<tr><td>${dataitem.id}</td>
//                             <td>${dataitem.name}</td>
//                             <td>${dataitem.url}</td>
//                             <td>${dataitem.created_at}</td>
//                             <td>${dataitem.pushed_at}</td>
//                             <td>${dataitem.updated_at}</td></tr>`;
//             });

//             document.getElementById("tab").innerHTML=result;
//         },

//         error: function(e){
//             console.log(e);
//         }
//     });
// }


// This will NOT Append the result

// function getData(){
//     var userName= document.getElementById("username").value;
//     $.ajax({
//         url: `http://api.github.com/users/${userName}/repos`,

//         success: function(data){
//             let result= `<tr>
//             <th>ID</th>
//             <th>RepoName</th>
//             <th>URL</th>
//             <th>Created_AT</th>
//             <th>Pushed_AT</th>
//             <th>Updated_AT</th>
//         </tr>`;

//         data.forEach(function(dataitem){

//                 result +=`<tr><td>${dataitem.id}</td>
//                             <td>${dataitem.name}</td>
//                             <td>${dataitem.url}</td>
//                             <td>${dataitem.created_at}</td>
//                             <td>${dataitem.pushed_at}</td>
//                             <td>${dataitem.updated_at}</td></tr>`;
//             });

//             document.getElementById("tab").innerHTML=result;
//         },

//         error: function(e){
//             console.log(e);
//         }
//     });
// }


// 29-JULY-2020

//--forEach() is used only for Arrays [{ },{ },{ }], [ ], numbers, strings & 
//              NOT Objects: {name: "A", name2:"B"}

//Example of Stringify;

// function add(){
//     document.getElementById("result").innerText
//     = document.getElementById('a').value +
//         document.getElementById('b').value; // Convert this to Integer // a=1, b=2 => 12

//     document.getElementById("result").innerText= parseInt(document.getElementById('a').value) +
//     parseInt(document.getElementById('b').value); // => 3

// }

//parseInt(), Number() -- is used to convert string to Integer
//String(Number()) -- convert Integer to String. // Type Casting


// Explaining about Objects
// var student={
//     name:"A",
//     rollNo:1,
//     class:"X",
//     teacher:"M",
// };
// // for... in Loop

// for (const property in object) {
//     console.log(property);
//     console.log(student[property]);
// }

// student["subject"] = "English";
// console.log(student);


//========   MAP ==== : like forEach() 

// const arr = [1,2,3,4,5]; //*5 = [5,10,15,20,25]
// const modifiedArr = arr.map(function(val){    // arr.forEach(function(val){ ...})
//     return val *5;
// });
//   console.log(modifiedArr); // [5,10,15,20,25]  

//Compare with forEach() --> will not Return anything.

//==== Filter===
// const arr=[1,2,3,4,5];
// const evenArray = arr.filter(function(value){ //oddArray 
//     return value % 2 ==0;                      // value % 2 != 0;
// });
//     console.log(evenArray); // [2,4]               // [1,3,5]

// //==== Arrow Function==

// const arra =[1,2,3,4,5];
// const oddArray = arra.filter(value => value % 2 != 0);
// console.log(oddArray); // [1,3,5]



//=====================  Types of FUNCTIONS   ========================

    // function add(){
    //     return true;

    // } // function returns something // Function
    // add();  // Function call


    // function sub(a){
    //     return a-1;
    // } // Parameterized function
    // sub(6); // Function call


    // const mul = function(){   // different ways to declare a functio// Value can have a function
    //     return true;
    // }; // Function as a value
    // mul();// Function call


    // function calc (fn, fn1, fn2){ // fn,fn1,fn2 are Arguments/Parameters
    //     fn();
    //     fn1();
    //     fn2();
    // } // Function as an Argument / Param
    // calc(add,sub,mul); // Function as an argument/ parameter // add=fn, sub=fn1, mul=fn2

    // const student = {
    //     marks: function(){
    //         return 100;

    //     },
    // }; // Property as a Function
    // student.marks(); // Function call 

//==================================================================

    //Accessing Arguments in a Function
    // function marks(){
    //     console.log(arguments); 
    // }
    // marks(1,2,3,4); // {0:1, 1:2, 2:3, 3:4}

    // //Using for loop

    // function marks(){
    //     for (let i = 0; i < arguments.length; i++) {
    //         console.log(arguments[i]);
            
    //     }
    // }
    // marks(5,6,7); // 5,6,7 
//===================================================================

//CONSTRUCTOR FUNCTION : starts with Capital letter : It accepts parameters
// const something = {}; //OR
// const somethingElse = new Object(); // {}

// function Student(nam, rol){
//     this.name = nam; // let variable_name = value; // name is a property
//     this.roll = rol; // roll is a property // this.name ==> s1.name
// } //Constructor function - Helps to create instances

// const s1 = new Student("Nilam", 1); // new - is creating an instance, Student - Object
// const s2 = new Student("XYZ", 2);

// console.log(s1); // {name: "Nilam" , roll:1} // Object is created
// console.log(s2); // {name: "XYZ" , roll:2}

// //console.log(s1.name); // Hardcoding //Nilam

//-----------------------------   CLASS   ------------------------------------

// Calculation Functions inside Student  e.g having fees of students

// function calc(a,b){
//     this.a = a;
//     this.b = b;
// }
// function add(){}
// function sub(){}
// ---- compare it with a Class makes it easier to understand

// class Calc{
//     constructor (a,b){
//         this.a = a;
//         this.b = b;
//     }
//     add(){ // add(x,y)
//         return this.a + this.b; // return x + y;
//     }
//     sub(){
//         return this.a - this.b;
//     }
// }

// const c1 = new Calc(5,1); // you can create n number of instances; c1 --- c100...

// console.log(c1); // {a:5, b:1}
// console.log(c1.add());//6 // console.log(c1.add(1,2)); = 3
// console.log(c1.add(1,2)); // Answer will remain 6. 
// console.log(c1.sub());//4

// It can not overwrite external parameters 
// to declare a variable, you can use var, let, const;

//=========================================================================

//      31-JULY-2020

// class Animal {
//     constructor (name){
//         this.name = name;
//     }

//     walk(){
//         console.log(`${this.name} can walk!`);
//     }

//     eat(){
//         console.log(`${this.name} can eat..`);
//     }

//     sleep(){
//         console.log(`${this.name} can sleep!!`);
//     }

// }

//     const a1 = new Animal ("Lion");
//     const a2 = new Animal ("Tiger");
//     const a3 = new Animal ("Cheetah");

//     console.log(a1); // Animal {name: "Lion"}

//     a1.sleep(); // Lion can sleep!!
//     a2.eat(); // Tiger can eat..
//     a3.walk(); // Cheetah can walk!

//============= Class Inheritance  =================================

class Animal { // Parent
    constructor (name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} can walk!`);
    }

    eat(){
        console.log(`${this.name} can eat..`);
    }

    sleep(){
        console.log(`${this.name} can sleep!!`);
    }
}

class Human extends Animal { // Human is a Child of Animal
    constructor (name){
        super(name);  // It calls Parent's constructor
    }

    think(){
        console.log(`${this.name} can Think.`);
    }
}

class Bird extends Human {
    constructor (name){
        super (name);
    }

    fly(){
        console.log(`${this.name} can Fly!`);
    }
}
    const a1 = new Animal ("Lion");
    const a2 = new Animal ("Tiger");
    const a3 = new Animal ("Cheetah");

    const h1 = new Human("Nilam");

    const b1 = new Bird("Parrot");

    console.log(a1); // Animal {name: "Lion"}

    a1.sleep(); // Lion can sleep!!
    a2.eat(); // Tiger can eat..
    a3.walk(); // Cheetah can walk!

    h1.think(); // Nilam can Think.
    h1.eat(); // Nilam can eat..

    b1.fly(); // Parrot can fly!
    b1.eat(); // Parrot can eat..
    