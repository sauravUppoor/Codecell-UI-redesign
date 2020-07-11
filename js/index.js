
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







