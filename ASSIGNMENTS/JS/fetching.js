//===================================================================================//
//METHOD 1//

//reusable function
// function getData(url) {

//     let result = fetch(url)
//         .then((response) => response.json()) // extract data from body
//         .then(data => data)
//         .catch((error) => error);

//     return result;
// }

// //function accepts 2 things // async & await 
// async function validate() {

//     const userName1 = document.getElementById('userName1').value;
//     const userName2 = document.getElementById('userName2').value;

//     const data = await getData(`https://api.github.com/users/${userName1}/followers`);

//     console.log(data);
//     // data is an array
//     data.filter((item) => item.login === userName2).length > 0
//         ? console.log(`${userName2} Follows ${userName1}`)
//         : console.log(`${userName2} Does Not Follow  ${userName1}`);

// }

//==================================================================================//
// METHOD 2 //

function validate() {

    const userName1 = document.getElementById('userName1').value;
    const userName2 = document.getElementById('userName2').value;

    fetch(`https://api.github.com/users/${userName1}/followers`)
        .then((response) => response.json())
        .then((data) => {
            //filters the array with condition
            data.filter((item) => item.login === userName2).length // > 0  // length can only have 2 outcomes ; true or false [ 1 or 0 ]
                ? console.log(`${userName2} Follows ${userName1}`)
                : console.log(`${userName2} Does Not Follow  ${userName1}`);

            //     // checking whether userName2 is there in the data or not is what we are checking. 
            //     console.log(data.filter((item) => item.login === userName2)); // === ; strictly check as per coding standard
        })
        .catch((error) => error);

}
