// var list = document.querySelector('#list')
var iphone_list = document.querySelector('#iphone-list')
var film_list = document.querySelector('#film-list')
var images_iphone = [
    "resources/img/iphone/resize/jord.jpg",
    "resources/img/iphone/resize/jen2.jpg",
    "resources/img/iphone/resize/lolee.jpg",
    "resources/img/iphone/resize/portrait.jpg",
    "resources/img/iphone/resize/arch.jpg",
    "resources/img/iphone/resize/jack.jpg",
    "resources/img/iphone/resize/jen-edit.jpg",
    "resources/img/iphone/resize/seena2.jpg",
    "resources/img/iphone/resize/isa.jpg",
    "resources/img/iphone/resize/jord2.jpg",
    "resources/img/iphone/resize/mindinz2.jpg",
    "resources/img/iphone/resize/gm.jpg",
    "resources/img/iphone/resize/arch3.jpg",
    "resources/img/iphone/resize/arch4.jpg",
    "resources/img/iphone/resize/irving.jpg",
]

var images_film = [

    "resources/img/film/resize/han1.jpg",
    "resources/img/film/resize/han2.jpg",
    "resources/img/film/resize/han3.jpg",
    // "resources/img/film/resize/han4.jpg",
    "resources/img/film/resize/jord1.jpg",
    "resources/img/film/resize/jord2.jpg",
    "resources/img/film/resize/jord4.jpg",
    "resources/img/film/resize/jord3.jpg",

    "resources/img/film/resize/jord5.jpg",
    "resources/img/film/resize/zo1.jpg",
    // "resources/img/film/resize/zo2.jpg",
    "resources/img/film/resize/bw14.JPG",
    // "resources/img/film/resize/bw10.JPG",
    // "resources/img/film/resize/bw5.jpg",
    "resources/img/film/resize/bw3.jpg",
    "resources/img/film/resize/bw16.JPG",
    // "resources/img/film/resize/bw4.JPG",
    // "resources/img/film/resize/bw13.JPG",
    "resources/img/film/resize/bw15.JPG",
    "resources/img/film/resize/bw2.jpg",

]

var sets = [
    { list: iphone_list, content: images_iphone },
    { list: film_list, content: images_film }
]

sets.forEach(set => {
    set.content.forEach(element => {
        var item = document.createElement('li');
        item.innerHTML = `<img class="display-image component" src="${element}" alt="">`
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

// document.querySelectorAll(".film-link").forEach(film => {
//     film.addEventListener('click', e => {
//         e.preventDefault();
//         window.scrollTo(filmBlock.offsetLeft, filmBlock.offsetTop);
//     })
// })

// document.querySelectorAll(".phone-link").forEach(film => {
//     film.addEventListener('click', e => {
//         e.preventDefault();
//         window.scrollTo(phoneBlock.offsetLeft, phoneBlock.offsetTop);
//     })
// })

// document.querySelector('#back-to-start').addEventListener('click', e => {
//     e.preventDefault();
//     window.scrollTo(0, 0);
// })

window.onload = function () {
    document.querySelectorAll('.display-image').forEach(
        (image) => {
            image.style.visibility = 'visible'
        }
    )
}

function transformScroll(event) {
    if (!event.deltaY) {
        return;
    }

    event.currentTarget.scrollLeft += event.deltaY * 4 // + event.deltaX;
    event.preventDefault();
}

var scroll = document.scrollingElement || document.documentElement;
scroll.addEventListener('wheel', transformScroll);