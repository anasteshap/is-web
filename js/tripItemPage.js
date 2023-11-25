function openModal(desiredName) {
    // let matchingElement = document.querySelector('.main--wrapper__trip-item strong[name="Место: "]:contains("' + desiredName + '")');

    // тут берем данные из бд
    document.getElementById("destination").querySelector("span").innerText = desiredName;
    document.getElementById("start-date").querySelector("span").innerText = "01.12.2023";
    document.getElementById("finish-date").querySelector("span").innerText = "07.12.2023";

    document.getElementsByClassName("trip--page").item(0).style.display = "block";
    let modalH1 = document.getElementsByClassName("trip--page__header").item(0)
    modalH1.textContent = desiredName;
}

function closeModal() {
    document.getElementsByClassName("trip--page").item(0).style.display = "none";
}

// Закрывать окно при клике за его пределами
window.onclick = function (event) {
    let modal = document.getElementsByClassName("trip--page").item(0);
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


let deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', () => {
    let trips = JSON.parse(localStorage.getItem('trips')) || [];
    trips = trips.filter(el => el.destination !== document.getElementById("destination").querySelector("span").innerText);
    localStorage.setItem('trips', JSON.stringify(trips));
    closeModal();
    addTravel(trips);
});