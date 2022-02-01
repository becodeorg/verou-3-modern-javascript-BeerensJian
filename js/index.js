import Data from "./config.js";
import {addCard, cardcontainer, displayDiv} from "./utils.js";
const button = document.querySelector("input[type='submit']")
const cityInput = document.querySelector("#cityInput")





const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: "",
        datasets: [{
            label: 'Temperature in °C',
            data: "",
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const fetchDataFromCoord = (lat, lon, lables, graphdata) => {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=metric&appid=" + Data.key)
    .then(response => response.json())
    .then(data => {
        processData(data, lables, graphdata)
    })
}

const processData = (data, lables, graphdata) => {
    const weekdata = data.daily;

    for (let i = 0; i < weekdata.length; i++) {
        addCard(weekdata, i, lables, graphdata);
    }
    
    document.querySelector(".chart").style.display = "block"
    updateConfigByMutating(myChart, lables, graphdata);
    loadImgs()
}

const updateConfigByMutating = (chart, lables, graphdata) => {
    chart.data.labels = lables;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = graphdata;
    });
    chart.update();
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    cardcontainer.innerHTML = "";
    displayDiv.children[0].innerHTML = "";
    // variables for graphJS
    let lables = new Array();
    let graphdata = new Array();
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&units=metric&appid=" + Data.key)
        .then(response => response.json())
        .then(data => {
            // display the city name
            console.log(data)
            var nameValue = data['city']['name']
            const titleElement = displayDiv.children[0];
            titleElement.innerHTML = nameValue;

            // get the lat and lon of the location
            const lat = data["city"]["coord"].lat;
            const lon = data["city"]["coord"].lon;
            console.log(lat, lon)

            fetchDataFromCoord(lat, lon, lables, graphdata)
            
        })

        .catch(err => alert("Wrong city name!"))

})

const loadImgs = () => {
    const imgcontainer = document.querySelector(".pictures")

    const key = "U-X2th9ZLuaaQOCfH-Ygn1F_WooQcKjcXUjzlWX5FoA"
    const url = "https://api.unsplash.com/search/photos?query=" + cityInput.value + "&client_id=" + key;

    fetch(url)
    .then (response => response.json())
    .then (data => {
        console.log(data.results);
        const imgList = data.results;

        for (let i = 0; i< imgList.length ; i++) {

        
        const img = document.createElement("img")
        img.className = "img"
        img.setAttribute("src", imgList[i].urls.regular)
        imgcontainer.appendChild(img)
        }
    })
}
