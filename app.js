// var list = document.querySelector('#list')
var iphone_list = document.querySelector('#iphone-list')
var film_list = document.querySelector('#film-list')
var images_iphone = [
    "resources/img/iphone/jord.jpg",
    "resources/img/iphone/jen2.jpg",
    "resources/img/iphone/lolee.jpg",
    "resources/img/iphone/portrait.jpg",
    "resources/img/iphone/arch.jpg",
    "resources/img/iphone/jack.jpg",
    "resources/img/iphone/jen.jpg",
    "resources/img/iphone/seena2.jpg",
    "resources/img/iphone/isa.jpg",
    "resources/img/iphone/jord2.jpg",
    "resources/img/iphone/mindinz2.jpg",
    "resources/img/iphone/gm.jpg",
    "resources/img/iphone/arch3.jpg",
    "resources/img/iphone/arch4.jpg",
    "resources/img/iphone/irving.jpg",
]

var images_film = [

    "resources/img/film/han1.jpg",
    "resources/img/film/han2.jpg",
    "resources/img/film/han3.jpg",
    "resources/img/film/han4.jpg",
    "resources/img/film/jord1.jpg",
    "resources/img/film/jord2.jpg",
    "resources/img/film/jord4.jpg",
    "resources/img/film/jord3.jpg",

    "resources/img/film/jord5.jpg",

    "resources/img/film/zo1.jpg",
    "resources/img/film/zo2.jpg",
    "resources/img/film/gm4.jpg",

    "resources/img/film/bw1.jpg",
    "resources/img/film/bw2.jpg",
    "resources/img/film/bw3.jpg",

]

var sets = [
    { list: iphone_list, content: images_iphone },
    // { list: film_list, content: images_film }
]

sets.forEach(set => {
    set.content.forEach(element => {
        var item = document.createElement('li');
        item.innerHTML = `<img class="display-image" src="${element}" alt="">`
        set.list.appendChild(item);

        item.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    })
})

const scrollWidth = screen.availWidth / 3;

document.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.code === "ArrowRight") {
        window.scrollBy(scrollWidth, 0);
    }
    else if (e.code === "ArrowLeft") {
        window.scrollBy(-scrollWidth, 0);
    }
})

var phoneBlock = document.querySelector('#pre-phone-block');
var filmBlock = document.querySelector('#pre-film-block');

document.querySelectorAll(".film-link").forEach(film => {
    film.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo(filmBlock.offsetLeft, filmBlock.offsetTop);
    })
})

document.querySelectorAll(".phone-link").forEach(film => {
    film.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo(phoneBlock.offsetLeft, phoneBlock.offsetTop);
    })
})