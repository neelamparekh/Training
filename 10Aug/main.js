const names = [];

function getDetails(name) {

    const userName = name ? name : document.getElementById('userName').value;
    if (userName !== " ") {

        getUserData(userName);

        const res = names.includes(userName);

        if (!res) {
            names.push(userName);
            fillRecentSearch(names);
        }
    } else {
        document.getElementById('location').innerHTML = 'Enter a valid UserName!!!';
    }
}


function fillRecentSearch(users) {

    users.forEach(function (user) {
        document.getElementById('recentSearch').innerHTML = `<li onclick="getDetails('${user}')">${user}</li>`;
    });
}

function getUserData(userName) {

    $.ajax({
        url: `http://api.github.com/users/${userName}`,
        success: function (data) {

            document.getElementById('nam').innerHTML = data.name;
            document.getElementById('loc').innerHTML = data.location;

            getRepoData(userName);

            if (data.location !== null) {

                document.getElementById('location').innerHTML = data.location;
                getWeatherData(data.location);
            } else {
                document.getElementById('location').innerHTML = 'No Location Details Found!';
            }

        },
        error: function (error) {
            console.log(error);
            return error;
        }
    });

}

function getRepoData(userName) {
    let result = `<tr>
    <th>ID</th>
    <th>Name</th>
  </tr>`;
    document.getElementById('repoData').innerHTML = result;

    $.ajax({
        url: `http://api.github.com/users/${userName}/repos`,
        success: function (data) {
            data.forEach(function (repo) {
                result += `<tr>
                <td>${repo.id}</td>
                <td>${repo.name}</td>
                <tr>`
            });
            document.getElementById('repoData').innerHTML = result;
        },
        error: function (error) {
            console.log(error);
        }
    });

}

function getWeatherData(location) {

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e8fe55b900263c5f83603ed631e15ad`,
        success: function (data) {
            document.getElementById('weatherData').innerHTML = `<tr>
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
        }
    });
}