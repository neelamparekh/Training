console.log(document);// document hold the complete HTML document
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

function getData(){ 
    var userName = document.getElementById('username').value;

    // $ - JQuery Object/Function
    $.ajax({
        url: 'http://api.github.com/users/' + userName,
        success: function(data){
            console.log(data);
        },
        error: function(e) {
            console.log(e);
        }
    }) // $ = student && ajax = marks // Function call

}