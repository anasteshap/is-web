function openModal(pageNum) {
    document.getElementsByClassName("trip--page").item(0).style.display = "block";
    let modalH1 = document.getElementsByClassName("trip--page__header").item(0)
    modalH1.textContent = 'Путешествие номер ' + pageNum;
}

function closeModal() {
    document.getElementsByClassName("trip--page").item(0).style.display = "none";
}

// Закрывать окно при клике за его пределами
window.onclick = function(event) {
    let modal = document.getElementsByClassName("trip--page").item(0);
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
