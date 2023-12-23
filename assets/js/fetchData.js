let loaderShowing = true;
const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadTrips() {
    await sleep(1000);
    try {
        // let urls = [];
        // for (let i = 0; i < getRandomInt(1, 10); i++) {
        //     urls.push(baseUrl + getRandomInt(1, 100).toString());
        // }

        let urls = generateUrls(getRandomInt(1, 10));
        for (let i = 0; i < urls.length; i++) {
            fetch(urls[i])
                .then(handleResponse)
                .then(trip => addNewTrip(trip))
                .catch(error => console.error(error));
        }
    } catch (err) {
        alert(`Error on urls fetch: ${err.toString()}`);
    }
}

async function handleResponse(response) {
    if (!response.ok) {
        throw new Error(`Failed to get url ${response.url}`);
    }
    return response.json();
}

function addNewTrip(trip) {
    const tripList = document.getElementsByClassName("main--wrapper__trips-wrap")[0]
    tripList.appendChild(createTripCard(trip));
    if (!loaderShowing) {
        return;
    }
    loaderShowing = false;
    let preloader = document.getElementsByClassName("main--wrapper__trip-loader")[0];
    preloader.style.display = "none";
}

function createTripCard(trip) {
    let newTravel = document.createElement("div");

    newTravel.setAttribute("onclick", "openModal('" + trip.title + "')");
    newTravel.classList.add("main--wrapper__trip-item");

    let tripName = document.createElement("p");
    tripName.classList.add("main--wrapper__trip-name");

    tripName.innerHTML = trip.title;
        // "<strong>Место: </strong>" + trip.destination +
        // "<br><strong>Начало: </strong>" + trip.startDate +
        // "<br><strong>Конец: </strong>" + trip.finishDate;
    newTravel.appendChild(tripName);
    return newTravel;
}

function generateUrls(count) {
    const urls = [];
    for (let i = 0; i < count; i++) {
        urls.push(baseUrl + getRandomInt(1, 100).toString());
    }
    return urls;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', loadTrips);
