document.addEventListener("DOMContentLoaded", function () {
    function loadMoreShows(sectionId) {
        let section = document.getElementById(sectionId);
        let hiddenShows = section.querySelectorAll(".hidden");

        for (let i = 0; i < 3 && hiddenShows.length > 0; i++) {
            hiddenShows[i].classList.remove("hidden");
        }

        if (section.querySelectorAll(".hidden").length === 0) {
            section.nextElementSibling.style.display = "none";
        }
    }

    window.loadMoreShows = loadMoreShows;
});