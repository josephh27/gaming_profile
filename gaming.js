let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
};

let elementsToShow = document.querySelectorAll(".background-canvas");

function loop() {
    elementsToShow.forEach((element) => {
        if (isElementInViewport(element)){
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop)
}
loop();

function isElementInViewport(el){
    if (typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


