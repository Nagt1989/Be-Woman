document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel");
    let scrollAmount = 0;

    function autoScroll() {
        if (scrollAmount < carrusel.scrollWidth - carrusel.clientWidth) {
            scrollAmount += 2;
            carrusel.scrollLeft = scrollAmount;
        } else {
            scrollAmount = 0;
            carrusel.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, 50);
});
