const names = localStorage.getItem("names")
    ? JSON.parse(localStorage.getItem("a"))
    : [];

// Will be called on click of GET DETAILS BUTTON and list item click
function getDetails(name) {
    // clearAll();
    // Checking if the parameter is passed or not
    const userName = name ? name : document.getElementById("userName").value;
    // Handling Error for empty search - else displaying error message
    if (userName !== "") {
        // Function call for user data
        getUserData(userName);

        // checking if name is already existing or not
        const res = names.includes(userName);

        // Will add and fill recent search only if the name is not in the array
        if (!res) {
            names.push(userName);
            localStorage.clear();
            localStorage.setItem("names", JSON.stringify(names));
            fillRecentSearch(names);
        }
    } else {
        document.getElementById("location").innerHTML = "Enter a valid UserName!!!";
    }
}

// function clearAll() {
//   document.getElementById("userName").innerText = "";
//   document.getElementById("userData").innerText = "";
//   document.getElementById("repoData").innerText = "";
//   document.getElementById("location").innerText = "";
//   document.getElementById("weatherData").innerText = "";
// }

// function to sill the recent search items
function fillRecentSearch(users) {
    let result = ``;
    // loops over the array and displays list items
    users.forEach(function (user) {
        result += `<li onclick="getDetails('${user}')">${user}</li>`;
    });

    document.getElementById("recentSearch").innerHTML = result;
}

// function to get user data
function getUserData(userName) {
    // Service call to get data and continue flow
    $.ajax({
        url: `http://api.github.com/users/${userName}`,
        success: function (data) {
            // on getting data displaying name and location
            document.getElementById("nam").innerHTML = data.name;
            document.getElementById("loc").innerHTML = data.location;

            // To get the details of repo
            getRepoData(userName);

            // Checking if location is present or not and then continuing the flow
            if (data.location !== null) {
                // displaying the location and making service call -  to get weather details
                document.getElementById("location").innerHTML = data.location;
                getWeatherData(data.location);
            } else {
                document.getElementById("location").innerHTML =
                    "No Location Details Found!";
            }
        },
        error: function (error) {
            console.log(error);
            return error;
        },
    });
}

// function to get user repo details
function getRepoData(userName) {
    let result = `<tr>
    <th>ID</th>
    <th>Name</th>
  </tr>`;
    document.getElementById("repoData").innerHTML = result;

    // service call and iterating over the repo details to display
    $.ajax({
        url: `http://api.github.com/users/${userName}/repos`,
        success: function (data) {
            data.forEach(function (repo) {
                result += `<tr>
                <td>${repo.id}</td>
                <td>${repo.name}</td>
                <tr>`;
            });
            document.getElementById("repoData").innerHTML = result;
        },
        error: function (error) {
            console.log(error);
        },
    });
}

// function to get weather details and display
function getWeatherData(location) {
    // service call
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e8fe55b900263c5f83603ed631e15ad`,
        success: function (data) {
            document.getElementById("weatherData").innerHTML = `<tr>
            <th>Temperature</th>
            <th>Humidity</th>
            </tr>
            <tr>
            <td>${data.main.temp}</td>
            <td>${data.main.humidity}</td>
            </tr>`;
        },
        error: function (error) {
            console.log(error);
        },
    });
}

// Local Storage

// GET and SET