function post(_event) {
    var input = document.getElementsByTagName("input")[1];
    var num1 = input.value;
    alert('"' + num1 + '"' + ' - Obrigado pelo feedback tmj 👊👍')
}

var btn = document.getElementById('button');
btn.addEventListener('click', post)