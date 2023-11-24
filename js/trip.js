function openForm() {
    clearForm();
    document.getElementsByClassName("trip--create--page")[0].style.display = "block";
}

function closeForm() {
    document.getElementsByClassName("trip--create--page")[0].style.display = "none";
}

function addTravel() {
    // Получаем значения из формы
    let destination = document.getElementById("trip--page__destination").value;
    let startDate = document.getElementById("trip--page__start-date").value;
    let finishDate = document.getElementById("trip--page__finish-date").value;
    let description = document.getElementById("trip--page__description").value;
    let personsCount = document.getElementById("trip--page__persons-count").value;

    // Тут будет сохранения данных в бд
    let newTravel = document.createElement("div");

    newTravel.setAttribute("onclick", "openModal('" + destination + "')");
    newTravel.classList.add("main--wrapper__trip-item");

    let tripName = document.createElement("p");
    tripName.classList.add("main--wrapper__trip-name");

    tripName.innerHTML =
        "<strong>Место: </strong>" + destination +
        "<br><strong>Начало: </strong>" + startDate +
        "<br><strong>Конец: </strong>" + finishDate;
    newTravel.appendChild(tripName);

    // document.getElementsByClassName("main--wrapper__trips-wrap")[0].appendChild(newTravel);
    document
        .getElementsByClassName("main--wrapper__trips-wrap")[0]
        .insertAdjacentElement('afterbegin', newTravel);
    closeForm();
}

function clearForm() {
    document.getElementById("trip--page__destination").value = "";
    document.getElementById("trip--page__start-date").value = "";
    document.getElementById("trip--page__finish-date").value = "";
    document.getElementById("trip--page__description").value = "";
    document.getElementById("trip--page__persons-count").value = "";
}