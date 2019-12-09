$(document).ready(function () {
    $("#btnPost").click(function (e) { // При нажатии на кнопку с id=btnPost
        e.preventDefault();
        $.ajax({                       // Выполняем ajax-запрос
            type: "POST",
            url: "/app/ajax_demo",     // URL запроса
            data: {                    // Данные, которые хочем добавить в запрос
                index: 1,
                name: "bob"
            },
            success: function (result) {                 // Если все OK
                alert("Прибыли данные: " + result);      // Показываем всплывающее окно
                updateCounter();                         // Вызываем функцию
            },
            error: function (msg) {                      // Если ошибка, показываем alert с сообщением
                alert("Oops");
            }
        });
    });

    function updateCounter() {               // Обновляем счетчик товаров через ajax
        $.ajax({
            type: "POST",                    // шлем POST
            url: "/app/cart_count_request",  // на этот адрес
            success: function (result) {     // если пришел ответ
                console.log(result);         // печатаем его в консоль
                // в метку с id=lblCounter пишем текст с пришедшим из BackEnd-a результатом
                $('#lblCounter').text('Товаров в корзине: ' + result);
            }
        });
    }
});