var habilidade = function () {
    var div = document.getElementById('habilidade');
    if (div.classList.contains('Saas')) {
        div.innerHTML="";
        div.classList.remove('Saas');
    } else {
        div.classList.add('Saas');
        div.innerHTML = '<h2>HABILIDADES</h2><br> <p>Só sei jogar xadrez :c</p> <img src="assets/images/photo1.jpg">';
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
var manga = function () {
    var div = document.getElementById('manga');
    if (div.classList.contains('Saas')) {
        div.classList.remove('Saas');
        div.innerHTML="";
    } else {
        div.classList.add('Saas');
        div.innerHTML = '<h2>MANGAS</h2><br> <p>Mangas que já li</p> <img src="assets/images/manga1.jpg"> <img src="assets/images/manga2.jpg">';
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
