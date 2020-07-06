
/* Sticky Navbar */
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

window.onscroll = () => {
    if(window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        nav.classList.remove("transparent");
    }
    else {
        nav.classList.remove("sticky");
    }
};

/* Mailing List animation */







