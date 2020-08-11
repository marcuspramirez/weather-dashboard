$(document).ready(function(){

  // var APIKey = "058f4aed0c2e9feb033a35c36c5f31b3";
  


  $("#searchBar").click(function () {
   
    newSearch = $("#city").val();
    console.log(newSearch);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=058f4aed0c2e9feb033a35c36c5f31b3";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) {
    console.log(response);

    });
  });


  // var icon = ("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
  // // Transfer content to HTML
  // $("#cityName").html("<h2>" + response.name + " (" + currentDateEl + ") " + icon + "</h2>");
  // $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
  // $(".humidity").text("Humidity: " + response.main.humidity + "%");

  // // Converts the temp to Kelvin with the below formula
  // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  // $(".tempF").text("Temperature (Kelvin) " + tempF);

  // // Log the data in the console as well
  // console.log("Wind Speed: " + response.wind.speed);
  // console.log("Humidity: " + response.main.humidity);
  // console.log("Temperature (F): " + response.main.temp);




});
