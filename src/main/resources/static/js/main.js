$(document).ready(function () {
    $("#btnPost").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/app/ajax_demo",
            data: {
                index: 1,
                name: "bob"
            },
            success: function (result) {
                alert("Прибыли данные: " + result);
                updateCounter();
            },
            error: function (msg) {
                alert("Oops");
            }
        });
    });

    function updateCounter() {
        $.ajax({
            type: "POST",
            url: "/app/cart_count_request",
            success: function (result) {
                console.log(result);
                $('#lblCounter').text('Товаров в корзине: ' + result);
            }
        });
    }
});