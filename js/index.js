
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

/* Mailing List animation */







