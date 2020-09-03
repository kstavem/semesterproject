document.addEventListener("DOMContentLoaded", function (event) {
    var accordion = document.getElementsByClassName("button__nav--sm");
    var i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("button--accordion");
            this.parentElement.classList.toggle("nav--alpha");
            var collapse = this.nextElementSibling;
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
            }
        });
    }
});


