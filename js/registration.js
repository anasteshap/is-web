document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Здесь может быть AJAX-запрос к серверу, который обработает регистрацию.
        // window.location.href = "/user/" + username; // Замените "/user/" на путь к аккаунтам пользователей на вашем сервере.
    });
});
