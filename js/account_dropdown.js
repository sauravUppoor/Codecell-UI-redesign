const dropdown = document.querySelector(".dropdown");
const account = document.querySelector(".account");

account.addEventListener
(
    "click",
    (event) =>
    {
        dropdown.classList.toggle("hide");
        console.log("Click");
        event.stopPropagation();
    }
);

window.addEventListener
(
    "click",
    () =>
    {
        dropdown.classList.add("hide");
    }
);