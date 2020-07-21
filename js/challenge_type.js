const all_challenges = document.querySelector(".challenges-container-all");
const all_challenges_button = document.querySelector(".all");

const unsolved_challenges = document.querySelector(".challenges-container-unsolved");
const unsolved_challenges_button = document.querySelector(".unsolved");

const solved_challenges = document.querySelector(".challenges-container-solved");
const solved_challenges_button = document.querySelector(".completed");

all_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges_button.classList.add("highlight");
        unsolved_challenges_button.classList.remove("highlight");
        solved_challenges_button.classList.remove("highlight");
        
        all_challenges.classList.remove("hide");
        unsolved_challenges.classList.add("hide");
        solved_challenges.classList.add("hide");
    }
);

unsolved_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges_button.classList.remove("highlight");
        unsolved_challenges_button.classList.add("highlight");
        solved_challenges_button.classList.remove("highlight");
        
        all_challenges.classList.add("hide");
        unsolved_challenges.classList.remove("hide");
        solved_challenges.classList.add("hide");
    }
);

solved_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges_button.classList.remove("highlight");
        unsolved_challenges_button.classList.remove("highlight");
        solved_challenges_button.classList.add("highlight");

        all_challenges.classList.add("hide");
        unsolved_challenges.classList.add("hide");
        solved_challenges.classList.remove("hide");
    }
);