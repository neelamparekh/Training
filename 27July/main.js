// function getData(){ 
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


//(28-July-2020)

// var [Functional Scope] & let [Block scope]

// {
//     var a = 20;
//     // console.log(a); //20
// } //block
// {
//     var b = 30;
//     console.log(b);//30
// }

//     console.log(a);//20
//     console.log(b);//Error

    //If you declare a Function then;

    // function display()
    // {
    //     var a = 20;
    //     console.log(a);//20
    // } //block
    // {
    //     var b = 30;
    //     console.log(b);//30
    // }
    
    //     // console.log(a);//Error
    //     // console.log(b);//Error
    // display(); 

    //HOISTING

    console.log(a); //
    console.log(b); //

    var a = 10;
    let b = 20;
//CONST
//string Literals 