const element = document.querySelector("#scrollwheel");

element.addEventListener("wheel", (event) => {
    event.preventDefault();

    element.scrollBy({
        left: event.deltaY < 0 ? -60 : 60,
    });
});

const scrollWheel = document.getElementById("scrollwheel");
const flavoursScrollWidth = scrollWheel.scrollWidth;

window.addEventListener("load", () => {
    self.setInterval(() => {
        if (scrollWheel.scrollLeft !== flavoursScrollWidth) {
            scrollWheel.scrollTo(scrollWheel.scrollLeft + 1, 0);
        }
    }, 40);
});