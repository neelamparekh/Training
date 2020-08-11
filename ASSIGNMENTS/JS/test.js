const names = [];

// Will be called on Click of GET DETAILS BUTTON and list item click
function getDetails(name) {
    // Checking if the parameter is passed or not

    const userName = name ? name : document.getElementById('username').value;
    // Handling Error for empty search - else displaying error message

    if (userName !== '') {

        // Function call for user Data
        getUserData(userName);

        // checking if name is already existing or not
        const res = names.includes(userName);

        // will add and fill recent search only if the name is not in the array
        if (!res) {
            names.push(userName);
            fillRecentSearch(names);
        }
    } else {
        document.getElementById('location').innerHTML = 'Enter a Valid UserName!!';
    }
}

// function to fill the recent search items
function fillRecentSearch(users) {
    //loops over the array and displays list items
    users.forEach(function (user) {
        document.getElementById('recentSearch').innerHTML = `<li onclick="getDetails('${user}')"> ${user}</li>`;
    });
}

// Function to get user data
function getUserData(userName) {
    //service call to get data and continue flow
    $.ajax({
        url: `https://api.github.com/users/${userName}`,
        success: function (data) {
            // on getting data displaying name and location

            document.getElementById('nam').innerHTML = data.name;
            document.getElementById('loc').innerHTML = data.location;

            // To get the details of repo
            getRepoData(userName);

            // Checking if location is present or not and then continuing the flow
            if (data.location !== null) {
                //displaying the location and making service call - to get weather details
                document.getElementById('location').innerHTML = data.location;
                getWeatherData(data.location);
            } else {
                document.getElementById('location').innerHTML = 'No Location Details Found!!';
            }
        },
        error: function (error) {
            console.log(error);
            return error;
        }
    });
}

// function to get user repo details
function getRepoData(userName) {
    let result = `<tr>
    <th>ID</th>
    <th>Repo Name</th>
    <th>URL</th>
    <th>Created At</th>
    <th>Pushed At</th>
    <th>Updated At</th>
    </tr>`;

    document.getElementById('repoData').innerHTML = result;

    // service call and iterating over the repo details to display
    $.ajax({
        url: `https://api.github.com/users/${userName}/repos`,
        success: function (data) {
            data.forEach(function (repo) {
                result += `<tr> 
            <td> ${repo.id}</td>
            <td>${repo.name}</td>
            <td>${repo.url}</td>
            <td>${repo.created_at}</td>
            <td>${repo.pushed_at}</td>
            <td>${repo.updated_at}</td>
            </tr>`
            });
            document.getElementById("repoData").innerHTML = result;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

// function to get weather details and display
function getWeatherData(location) {
    // service call
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q= ${location}&appid=4e8fe55b900263c5f83603ed631e15ad`,
        success: function (data) {

            document.getElementById('weatherData').innerHTML = `<tr>
            <th>City</th>
            <th>Humidity</th>
            <th>Weather</th>
            <th>Temperature</th>
        </tr>
        <tr>
            <td>${data.name}</td>
            <td>${data.main.humidity}</td>
            <td>${data.weather[0].main}</td>
            <td>${data.main.temp}</td>
            </tr>`;
        },
        error: function (error) {
            console.log(error);
        }
    });
}
