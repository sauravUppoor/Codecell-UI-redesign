
/* Sticky Navbar */
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

window.onscroll = () => {
    if(window.pageYOffset > sticky) {
        nav.style.borderBottom = "0.2px solid #bcbfc821";
    }
    else {
        nav.style.borderBottom = "0px solid #bcbfc821";
    }
};

/* Profile Animation */

var goToEdit = document.getElementById("edit-profile");
var goToProfile = document.getElementById("actual-profile");
profileEdit = () => {
    goToEdit.classList.remove("hidden");
    goToProfile.classList.add("hidden");
    console.log("1");
}
profileUpdate = () => {
    goToEdit.classList.add("hidden");
    goToProfile.classList.remove("hidden");
}

/* Ranklist points bar */

var table = document.getElementById("table");
var totalPoints = table.children[0].children[3].textContent.slice(0,-3);
totalPoints = parseInt(totalPoints);

var children = table.children;
let array = [...children];
setW = (item) => {
    var curPoints = item.children[3].textContent.slice(0,-3);
    curPoints = parseInt(curPoints);

    var percent = curPoints/totalPoints * 100;
    item.children[2].children[0].style.maxWidth = percent + "%";
}

array.forEach(setW);

/* Editor */










