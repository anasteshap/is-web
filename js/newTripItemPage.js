document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("schedule-form");
    // const scheduleContainer = document.getElementById("schedule-container");
    const showFormButton = document.getElementById("show-form-button");
    const divContainer = document.getElementById("div-container");

    // Обработчик для кнопки "Открыть форму"
    showFormButton.addEventListener("click", function() {
        form.style.display = "block";
        showFormButton.style.display = "none";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Получите значения параметров из формы
        const daysInWeek = parseInt(form.elements.daysInWeek.value);
        const maxClasses = parseInt(form.elements.maxClasses.value);
        const language = form.elements.language.value;

        // Генерация таблицы по выбранным параметрам (здесь нужно добавить код генерации таблицы)

        // Создайте новый div для отображения результата
        const newDiv = document.createElement("div");
        newDiv.className = "result-div"; // Добавьте класс для стилизации (если нужно)
        newDiv.innerHTML = generateSchedule(daysInWeek, maxClasses, language);

        // Добавьте новый div в контейнер
        divContainer.appendChild(newDiv);

        // Очистите форму
        form.reset();

        // Сохранение параметров в LocalStorage
        const params = { daysInWeek, maxClasses, language };
        localStorage.setItem("scheduleParams", JSON.stringify(params));
    });

    // Загрузка параметров из LocalStorage при загрузке страницы
    const savedParams = localStorage.getItem("scheduleParams");
    if (savedParams) {
        const { daysInWeek, maxClasses, language } = JSON.parse(savedParams);
        form.elements.daysInWeek.value = daysInWeek;
        form.elements.maxClasses.value = maxClasses;
        form.elements.language.value = language;
    }
});

// Дополните код функцией generateSchedule для создания таблицы
function generateSchedule(daysInWeek, maxClasses, language) {
    // Здесь нужно сгенерировать таблицу и вернуть её HTML
}
