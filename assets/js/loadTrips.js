document.addEventListener('DOMContentLoaded', () => {
    let trips = JSON.parse(localStorage.getItem('trips')) || [];
    const form = document.getElementById("myForm");

    form.addEventListener('submit', e => {
        e.preventDefault();

        const trip = {
            // id:
            destination: e.target.querySelector('#trip--page__destination').value,
            startDate: e.target.querySelector('#trip--page__start-date').value,
            finishDate: e.target.querySelector('#trip--page__finish-date').value
        }
        trips.push(trip);
        localStorage.setItem('trips', JSON.stringify(trips));
        e.target.reset();
        addTravel(trips);
    });

    // addTravel(trips);
});

function addTravel(trips) {
    document.getElementsByClassName("main--wrapper__trips-wrap")[0].innerText = ""
    trips.forEach(trip => {
            let newTravel = document.createElement("div");

            newTravel.setAttribute("onclick", "openModal('" + trip.destination + "')");
            newTravel.classList.add("main--wrapper__trip-item");

            let tripName = document.createElement("p");
            tripName.classList.add("main--wrapper__trip-name");

            tripName.innerHTML =
                "<strong>Место: </strong>" + trip.destination +
                "<br><strong>Начало: </strong>" + trip.startDate +
                "<br><strong>Конец: </strong>" + trip.finishDate;
            newTravel.appendChild(tripName);

            document
                .getElementsByClassName("main--wrapper__trips-wrap")[0]
                // .insertAdjacentElement('afterbegin', newTravel);
                .appendChild(newTravel);
            closeForm();
        }
    )
}

function openForm() {
    document.getElementsByClassName("trip--create--page")[0].style.display = "block";
}

function closeForm() {
    document.getElementsByClassName("trip--create--page")[0].style.display = "none";
}