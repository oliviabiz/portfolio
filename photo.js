window.addEventListener('load', function () {
    index = 1
    while (index < 100) {
        file_name = `${folder}img%20(${index}).jpg`
        set_image(file_name)
        index++;
    }
})


var image_list = document.querySelector("#image-list")

function set_image(image_name) {
    try {
        var item = document.createElement('li');
        item.classList.add('display-image-container')
        item.innerHTML = `<img class="display-image component" src="${image_name}" alt="" onerror=javascript:this.parentElement.remove();>`
        image_list.appendChild(item);
    }
    catch (err) {
        return;
    }
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

        image_list.scrollLeft += event.deltaY  // + event.deltaX;
        event.preventDefault();
    }
}

var scroll = document.scrollingElement || document.documentElement;

scroll.addEventListener('wheel', transformScroll);