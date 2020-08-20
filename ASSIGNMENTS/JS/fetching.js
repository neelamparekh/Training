fetch(`https://api.github.com/users/${userName}`).then(function (response) {
    return response.json();

}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});