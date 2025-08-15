const apikey = 'c9c9e54c2f7559274f7054bd55990a11';

const searchbtn = document.querySelector('.search button');
const search = document.querySelector('.search input');
const image = document.querySelector('.weather-box img');

async function checkweather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        document.querySelector(".hide").style.display = 'none';
        document.querySelector(".note").style.display = 'none';
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".error img").style.display = 'block';
        return;
    }

    const dis = data.weather[0].main;

    document.querySelector(".error").style.display = 'none';
    document.querySelector(".error img").style.display = 'none';
    document.querySelector(".note").style.display = 'none';
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".info-humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".info-wind").innerHTML = data.wind.speed + ' km/h';
    document.querySelector(".des").innerHTML = dis;
    console.log(dis);
    switch (dis) {
        case 'Clouds':
            image.src = "imagess/cloudy.png";
            
            break;
        case 'Clear':
            image.src = "imagess/clear.jpg";
            break;
        case 'Rain':
            image.src = "imagess/rainy.jpg";
            break;
        case 'Snow':
            image.src = "imagess/snow.jpg";
            break;
        case 'Haze':
            image.src = "imagess/haze.jpg";
            break;
        case 'Mist':
            image.src = "imagess/mist.jpg";
            break;
        default:
            image.src = "imagess\invalid.jpg";
            break;
    }
    document.querySelector(".hide").style.display = 'block';
}

searchbtn.addEventListener('click', () => {
    checkweather(search.value.trim());
});
