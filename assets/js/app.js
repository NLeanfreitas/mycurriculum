var habilidade = function () {
    var div = document.getElementById('habilidade');
    if (div.classList.contains('Saas')) {
        div.innerHTML="";
        div.classList.remove('Saas');
    } else {
        div.classList.add('Saas');
        div.innerHTML = '<h2>HABILIDADES</h2><br> <p>Explicando minhas habilidades</p>';
    }
}
var sobre = function () {
    var div = document.getElementById('sobre');
    if (div.classList.contains('Saas')) {
        div.classList.remove('Saas');
        div.innerHTML="";
    } else {
        div.classList.add('Saas');
        div.innerHTML = '<h2>SOBRE MIM</h2><br> <p>Falando sobre mim</p>';
    }
}

var dark = function () {
    var body = document.getElementById('dark');
    if (body.classList.contains('Dark-mode')) {
        body.classList.remove('Dark-mode');
    } else {
        body.classList.add('Dark-mode');
    }
}
