// var folder = "resources/img/places/";

$(document).ready(
    $.ajax({
        url: folder,
        success: function (data) {
            console.log('document ready:: ajax func')
            $(data).find("a").attr("href", function (i, val) {
                console.log('searching:', val)
                if (val.match(/\.(jpe?g|png|gif|JPG)$/)) {
                    console.log('val is an image: can set it')
                    val = '.' + val
                    set_image(val)
                }
            });
            // set_images()
        },
    })
)

var image_list = document.querySelector("#image-list")

function set_image(image_name) {
    var item = document.createElement('li');
    item.classList.add('display-image-container')
    item.innerHTML = `<img class="display-image component" src="${image_name}" alt="">`
    image_list.appendChild(item);
    item.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);
}

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

function transformScroll(event) {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (!event.deltaY) {
            return;
        }

        event.currentTarget.scrollLeft += event.deltaY * 4 // + event.deltaX;
        event.preventDefault();
    }
}

var scroll = document.scrollingElement || document.documentElement;

scroll.addEventListener('wheel', transformScroll);

$(window).load(function () {
    image_list.style.visibility = "visible";
})