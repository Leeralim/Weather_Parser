//api.openweathermap.org/data/2.5/weather?lat=66.393784&lon=36.586868&appid=f012bf7ce54feddfb49d3da5e9513cc9
//https://api.openweathermap.org/data/2.5/onecall?lat=66.393784&lon=36.586868&&exclude=hourly,daily&appid=52130df860809b2de4d3d941d6da9a80
//api.openweathermap.org/data/2.5/forecast/daily?lat=66.393784&lon=36.586868&cnt=4&appid=f012bf7ce54feddfb49d3da5e9513cc9

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=66.393784&lon=36.586868&appid=52130df860809b2de4d3d941d6da9a80')
    .then(function (resp) {
        return resp.json();
    }).then(function (data) {

        console.log(data);
        //document.querySelector('.package-name').textContent = "Варзуга";

        const degrees__days = document.getElementById("degrees__days");
        const timeActualy = document.getElementById("timeActualy");
        const pressure = document.getElementById("pressure");
        const pop = document.getElementById("pop");
        const wind = document.getElementById("wind");
        const humidity = document.getElementById("humidity");

        let ulElement = document.createElement("div");
        let wrapPressureElement = document.createElement("div");
        let wrapHumidityElement = document.createElement("div");
        let wrapPopElement = document.createElement("div");
        let wrapWindElement = document.createElement("div");
        let wrapTimeElement = document.createElement("div");

        degrees__days.append(ulElement);
        pressure.append(wrapPressureElement);
        humidity.append(wrapHumidityElement);
        pop.append(wrapPopElement);
        wind.append(wrapWindElement);
        timeActualy.append(wrapTimeElement);

        let liElement;
        let pressureElement;
        let humidityElement;
        let popElement;
        let windElement;
        let timeElement;

        //1 day
        for (let index = 0; index < 1; index++) {
            for (let jndex = 0; jndex < data.daily.length; jndex++) {

                liElement = document.createElement("div");
                pressureElement = document.createElement("div");
                humidityElement = document.createElement("div");
                popElement = document.createElement("div");
                windElement = document.createElement("div");
                timeElement = document.createElement("div");

                ulElement.append(liElement);
                wrapPressureElement.append(pressureElement);
                wrapHumidityElement.append(humidityElement);
                wrapPopElement.append(popElement);
                wrapWindElement.append(windElement);
                wrapTimeElement.append(timeElement);

                let element = data.daily[jndex];
                let unixTimeStamp = data.daily[jndex].dt;

                let date = new Date(unixTimeStamp * 1000);
                let hours = date.getHours();
                let minutes = "0" + date.getMinutes();
                let day = date.getDay();
                let formattedTime;

                if (day == 0){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Воскресенье";
                }
                else if (day == 1){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Понедельник";
                }
                else if (day == 2){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Вторник";
                }
                else if (day == 3){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Среда";
                }
                else if (day == 4){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Четверг";
                }
                else if (day == 5){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Пятница";
                }
                else if (day == 6){
                    formattedTime = hours + ":" + minutes.substr(-2) + "/" + "Суббота";
                }

                //let formattedTime = hours + ":" + minutes.substr(-2) + "/" + day;

                liElement.innerHTML = "Температура: " 
                + Math.round(element.temp.morn - 273.15) + "&deg;C (утром)" + ", "
                + Math.round(element.temp.day - 273.15) + "&deg;C (днем)" + ", "
                + Math.round(element.temp.eve - 273.15) + "&deg;C (вечером)" + ", "
                + Math.round(element.temp.night - 273.15) + "&deg;C (ночью)" + " | ";

                pressureElement.innerHTML = "Давление: " + Math.round(element.pressure * 0.75) + "мм. рт. ст.";
                humidityElement.innerHTML = "Влажность: " + element.humidity + "%";
                popElement.innerHTML = "Осадки: " + (element.pop * 100) + "%";
                windElement.innerHTML = "Скорость ветра: " + element.wind_speed + "м/с";

                timeElement.innerHTML = " Время: " + formattedTime;
            }
        }

        //2 day
        // for (let index = 0; index < 1; index++) {
        //     for (let jndex = 24; jndex < 47 /*data.hourly.length*/ ; jndex++) {

        //         liElement2 = document.createElement("div");
        //         timeElement2 = document.createElement("div");

        //         ulElement2.append(liElement2);
        //         wrapTimeElement2.append(timeElement2);

        //         let element = data.hourly[jndex];
        //         let unixTimeStamp = data.hourly[jndex].dt;
        //         let weekDays = ["Воскресенье",
        //             "Понедельник",
        //             "Вторник",
        //             "Среда",
        //             "Четверг",
        //             "Пятница",
        //             "Суббота"
        //         ];

        //         let date = new Date(unixTimeStamp * 1000);
        //         let hours = date.getHours();
        //         let minutes = "0" + date.getMinutes();
        //         let day = date.getDay();
        //         let formattedTime = hours + ":" + minutes.substr(-2) + "/" + day;

        //         liElement2.innerHTML = "Текущая температура: " + Math.round(element.temp - 273.15) + "&deg;C" + " | ";

        //         timeElement2.innerHTML = " Время: " + formattedTime;
        //     }
        // }

    }).catch(function () {
        //ловим ошибоси
    });


// document.querySelector('.degrees__morning').innerHTML = "Текущая температура (утром): " + Math.round(
//     data.daily[0].temp.morn - 273.15) + '&deg;';

// document.querySelector('.degrees__day').innerHTML = "Текущая температура (днем): " + Math.round(
//     data.daily[0].temp.day - 273.15) + '&deg;';

// document.querySelector('.degrees__evening').innerHTML = "Текущая температура (вечером): " + Math.round(
//     data.daily[0].temp.eve - 273.15) + '&deg;';

// document.querySelector('.degrees__night').innerHTML = "Текущая температура (ночью): " + Math.round(
//     data.daily[0].temp.night - 273.15) + '&deg;';

// document.querySelector('.wind__description').textContent = data.alerts[1].description;
// document.querySelector('.wind__speed').textContent = "Скорость ветра: " + data.daily[0].wind_speed + " м/с";

// document.querySelector('.features__wet').textContent = "Влажность воздуха: " + data.daily[0].humidity + " %";
// document.querySelector('.features__pressure').textContent = "Атмосферное давление: " + Math.round(data.daily[0].pressure * 0.75) + " мм. рт. ст.";
// document.querySelector('.features__pop').textContent = "Вероятность возниковения осадков: " + Math.round(data.daily[0].pop * 100) + " %";
// let currentTime = new Date(data.hourly[0].dt * 1000);
// let hours = currentTime.getHours();
// let date = currentTime.getDate();
// let day = currentTime.getUTCDay();

// document.querySelector('.feelslike__morning').innerHTML = "Текущее время: " + date + "/" + day + hours;
// document.querySelector('.feelslike__day').innerHTML = "Днем ощущалось как: " + Math.round(data.daily[0].feels_like.day - 273.15) + "&deg;";
// document.querySelector('.feelslike__evening').innerHTML = "Вечером ощущалось как: " + Math.round(data.daily[0].feels_like.eve - 273.15) + "&deg;";
// document.querySelector('.feelslike__night').innerHTML = "Ночью будет ощущаться как: " + Math.round(data.daily[0].feels_like.night - 273.15) + "&deg;";

// document.querySelector('.windspeed').innerHTML = "Скорость ветра: " + Math.round(data.wind.speed) + " м/с";
// document.querySelector('.wet').innerHTML = "Влажность: " + data.main.humidity + "%";

// document.querySelector('.features__clouds').innerHTML = "Облачность: " + data.daily[0].clouds;