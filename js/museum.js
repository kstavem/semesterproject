// Loop running over the nav menu to open/close submenus. Also sets an "active" background color.
var accordion = document.getElementsByClassName("button__nav--sm");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        if (this.classList.contains("button--accordion")) {
            this.classList.remove("button--accordion");
            this.parentElement.classList.remove("nav--alpha");
            this.nextElementSibling.style.maxHeight = null;
        } else {
            onlyOne();
            this.classList.toggle("button--accordion");
            this.parentElement.classList.toggle("nav--alpha");
            var collapse = this.nextElementSibling;
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
            }
        }
    });
}

// Only allow one accordion open at a time
function onlyOne() {
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove("button--accordion");
        accordion[i].parentElement.classList.remove("nav--alpha");
        accordion[i].nextElementSibling.style.maxHeight = null;
    }
}

// Back to top button
var topBtn = document.getElementById("top");

function toTop() {
    document.documentElement.scrollTop = 0;
}

topBtn.addEventListener("click", function () {
    toTop();
});


// Close menu on window resize and non-menu click
var toggleBox = document.getElementById("nav-toggler");
function unCheck() {
    if (toggleBox.checked = true) {
        toggleBox.click()
    };
};

window.addEventListener("resize", function () {
    onlyOne();
    unCheck();
});

//Close menu on smaller devices when clicking an HTML bookmark (didn't work with ClassName, so made 2x id's)
var close = document.getElementById("close");
var close2 = document.getElementById("close2");
close.addEventListener("click", function () {
    onlyOne();
    unCheck();
});
close2.addEventListener("click", function () {
    onlyOne();
    unCheck();
});
