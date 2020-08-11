

function getData(){ 
    var city = document.getElementById('city').value;

    $.ajax({

        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4e8fe55b900263c5f83603ed631e15ad",
        
        success: function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = data.main.temp;
            var wth = data.weather[0].main;

        
            $('.icon').attr('src', icon);
            $('.weather').append(wth);
            $('.temp').append(temp);
            },

        error: function(e) {
        console.log(e);
        }
    })

}
