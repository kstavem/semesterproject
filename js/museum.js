

var accordion = document.getElementsByClassName("button__nav--sm");
var i;

function onlyOne() {
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove("button--accordion");
        accordion[i].parentElement.classList.remove("nav--alpha");
        accordion[i].nextElementSibling.style.maxHeight = null;
    }
}

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        onlyOne();
        var isOpen = this.classList.contains("button--accordion");
        isOpen ? this.classList.remove("button--accordion") : this.classList.add("button--accordion");
        this.parentElement.classList.toggle("nav--alpha");
        var collapse = this.nextElementSibling;
        if (collapse.style.maxHeight) {
            collapse.style.maxHeight = null;
        } else {
            collapse.style.maxHeight = collapse.scrollHeight + "px";
        }
    });
}



