import { DateTime } from "luxon";


const addCard = (weekdata, i, lables, graphdata, cardcontainer) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    const dayHeader = document.createElement("div")
    dayHeader.className = "dateinfo"
    const cardTitle = document.createElement("p")
    cardTitle.className = "day"
    const dayInMonth = document.createElement("p")
    dayInMonth.className = "dayinmonth"
    const month = document.createElement("p")
    month.className = "month"

    const unixtime = weekdata[i].dt;
    const dater = DateTime.fromSeconds(unixtime);

    const daydate = new Date(unixtime * 1000); // converts the unix time to miliseconds unix time so it can work with Date()

    // adding values to variables for GraphJS
    lables.push(dater.weekdayLong)
    graphdata.push(Math.round(weekdata[i].temp.day))

    cardTitle.innerText = dater.weekdayLong;
    dayInMonth.innerText = dater.day;
    month.innerText = dater.monthLong;
    dayHeader.append(cardTitle, dayInMonth, month);
    newCard.appendChild(dayHeader);
    
    // Rest of card information v
    const descpara = document.createElement("p")
    descpara.className = "description"
    const descimg = document.createElement("img");
    descimg.setAttribute("width", "100px");
    const iconid = weekdata[i].weather[0].icon;
    const iconurl = "http://openweathermap.org/img/wn/" + iconid + "@2x.png";
    const desc = weekdata[i].weather[0].description;
    descimg.setAttribute("src", iconurl);

    descpara.innerText = desc;
    newCard.append(descpara, descimg);

    const tempEl = document.createElement("p");
    tempEl.className = "temp";
    tempEl.innerText = Math.round(weekdata[i].temp.day) + "°C";
    newCard.appendChild(tempEl);

    cardcontainer.appendChild(newCard);
}


export {addCard};